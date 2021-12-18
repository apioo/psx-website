---
sidebar_position: 6
---

# Integration

All PSX components are framework independent and can be easily used in many different environments. The following page
provides an overview about available integrations:

## Symfony

In development

## Laravel

In development

## PSX

PSX is a framework dedicated to build REST APIs. All our components have evolved out of this framework but currently our
main focus is to develop and extend our framework independent components. The framework is still in active use at
[Fusio](https://www.fusio-project.org/), which is an open source API management system. If you like to try a different
framework dedicated to API development feel free to check out the [repository](https://github.com/apioo/psx). To give
you a first impression a normal controller in PSX always represents a HTTP resource and it looks like:

```php
<?php

#[Description('Collection endpoint')]
class CollectionPopo extends SchemaApiAbstract
{
    #[Inject]
    private Population $populationService;

    #[QueryParam(name: "startIndex", type: "integer")]
    #[QueryParam(name: "count", type: "integer")]
    #[Outgoing(code: 200, schema: Collection::class)]
    protected function doGet(HttpContextInterface $context)
    {
        return $this->populationService->getAll(
            $context->getParameter('startIndex'),
            $context->getParameter('count')
        );
    }

    #[Incoming(schema: Entity::class)]
    #[Outgoing(code: 201, schema: Message::class)]
    protected function doPost($record, HttpContextInterface $context)
    {
        $this->populationService->create(
            $record->getPlace(),
            $record->getRegion(),
            $record->getPopulation(),
            $record->getUsers(),
            $record->getWorldUsers()
        );

        $message = new Message();
        $message->setSuccess(true);
        $message->setMessage('Create population successful');
        return $message;
    }
}

```
