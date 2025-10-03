---
title: Custom
description: A reference page in my new Starlight docs site.
---

This page describes how you can integrate our API components into you custom app.
To start you need to require the API package s.

```
composer require psx/api
```

## Scanner

At first you need to build a class which implements the `PSX\Api\ScannerInterface` interface,
this class basically knows howto iterate through each controller class. How you resolve those
controller classes depends on your app, maybe your controller classes are inside
a DI container, you have an external routing file or you could also go simply
through the filesystem. Please take a look at our [Symfony](https://github.com/apioo/psx-api-bundle/blob/main/src/Api/Scanner/RouterScanner.php)
or [Laravel](https://github.com/apioo/psx-api-laravel/blob/main/src/Api/Scanner/RouterScanner.php)
scanner to see how this can be implemented.

## Parser

Then you need to create class which implements the `PSX\Api\ParserInterface` interface, this
class receives the controller class and reads all attributes. Most likely you want to
extend from our `PSX\Api\Parser\Attribute` parser which handles all attributes but theoretical
it would be possible to get those information from other sources. For example take a look
at the [Symfony](https://github.com/apioo/psx-api-bundle/blob/main/src/Api/Parser/SymfonyAttribute.php)
attribute parser which extends the default attribute parser.

## Argument resolver

Then you need to make it possible to use the attributes at your controller. In Symfony
it is possible to customize this through a [ValueResolver](https://github.com/apioo/psx-api-bundle/blob/main/src/ArgumentResolver/ValueResolver.php)
but this depends on your framework. In the end you would need to read the values from the
HTTP request and pass them as argument to the controller.

## Controller response

Then you need to handle the response of your controller. This means you framework must
convert the DTO response to JSON. Normally this should already work out of the box since all
DTOs are also JsonSerializable but for other response types you may need custom serialization.
In Symfony we can register a custom [response listener](https://github.com/apioo/psx-api-bundle/blob/main/src/EventListener/SerializeResponseListener.php)
which transforms the response.

## Dependencies

Your app has probably some kind of dependency injection container to assemble all services,
there you need to register the PSX specific services. Please take a look at our Symfony
[services.php](https://github.com/apioo/psx-api-bundle/blob/main/config/services.php)
to see how you can register each service.

## Commands

At last, you need to create a command to generate the actual specification from the controller.
If you are using Symfony commands you can directly take a look at our [integration](https://github.com/apioo/psx-api-bundle/blob/main/src/Command/SdkCommand.php)
otherwise you can also build a custom script which invokes the generation.
