---
title: Nested
---
This library helps to build complex nested JSON responses based on relational tables.

## Basic usage

At the core this library provides a `Builder` class which allows you to define a definition structure how the result
of your JSON response should look. To give you an example the following code is from our test case and should give you
a first insight how you can generate a complex JSON structure s.

```php
<?php

$connection = null; // a doctrine DBAL connection
$builder = new \PSX\Nested\Builder($connection);

$definition = [
    'totalResults' => $builder->doValue('SELECT COUNT(*) AS cnt FROM psx_sql_provider_news', [], $builder->fieldInteger('cnt')),
    'entries' => $builder->doCollection('SELECT * FROM psx_sql_provider_news ORDER BY id DESC', [], [
        'id' => $builder->fieldInteger('id'),
        'title' => $builder->fieldCallback('title', function($title){
            return ucfirst($title);
        }),
        'author' => $builder->doEntity('SELECT * FROM psx_sql_provider_author WHERE id = ?', [new Reference('author_id')], [
            'id' => $builder->fieldFormat('id', 'urn:profile:%s'),
            'name' => 'name',
            'uri' => 'uri',
        ]),
        'tags' => $builder->doColumn('SELECT title FROM psx_sql_provider_news', [], 'title'),
        'date' => $builder->fieldDateTime('create_date'),
    ])
];

$result = $builder->build($definition);

echo \json_encode($result);

```

This would result in the following JSON payload 

```json
{
  "totalResults": 2,
  "entries": [
    {
      "id": 2,
      "title": "Bar",
      "author": {
        "id": "urn:profile:1",
        "name": "Foo Bar",
        "uri": "https:\/\/phpsx.org"
      },
      "tags": [
        "foo",
        "bar"
      ],
      "date": "2016-03-01T00:00:00Z"
    },
    {
      "id": 1,
      "title": "Foo",
      "author": {
        "id": "urn:profile:1",
        "name": "Foo Bar",
        "uri": "https:\/\/phpsx.org"
      },
      "tags": [
        "foo",
        "bar"
      ],
      "date": "2016-03-01T00:00:00Z"
    }
  ]
}
```

## JSON Definition

It is also possible to declare the definition in a JSON notation

```json
{
  "totalEntries": {
    "$value": "SELECT COUNT(*) AS cnt FROM psx_sql_provider_news",
    "$definition": {
      "$key": "cnt",
      "$field": "integer"
    }
  },
  "entries": {
    "$collection": "SELECT id, author_id, title, create_date FROM psx_sql_provider_news ORDER BY id ASC LIMIT :startIndex, 8",
    "$params": {
      "startIndex": 0
    },
    "$definition": {
      "id": {
        "$key": "id",
        "$field": "integer"
      },
      "title": "title",
      "tags": {
        "$column": "SELECT title FROM psx_sql_provider_news",
        "$definition": "title"
      },
      "author": {
        "$entity": "SELECT id, name, uri FROM psx_sql_provider_author WHERE id = :id",
        "$params": {
          "id": {
            "$ref": "author_id"
          }
        },
        "$definition": {
          "displayName": "name",
          "uri": "uri"
        }
      }
    }
  }
}
```

Then you can execute this JSON definition through the JSON provider

```php
<?php

$json = '{}'; // JSON from above

$provider = new JsonProvider($this->connection);
$result = $provider->create(\json_decode($json));

echo \json_encode($result);

```
