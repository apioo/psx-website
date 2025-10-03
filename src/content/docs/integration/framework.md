---
title: Framework
description: A reference page in my new Starlight docs site.
---

In case you can't use one of our integrations we also provide a lightweight
framework which is basically build around those attributes. A controller
would then look like s.

```php
class Population extends ControllerAbstract
{
    #[Get]
    #[Path('/population')]
    public function getAll(#[Query] ?int $startIndex = null, #[Query] ?int $count = null): Model\PopulationCollection
    {
        return $this->populationTable->getCollection($startIndex, $count);
    }

    #[Post]
    #[Path('/population')]
    public function create(#[Body] Model\Population $payload): Model\Message
    {
        $id = $this->populationService->create($payload);

        $message = new Model\Message();
        $message->setSuccess(true);
        $message->setMessage('Population record successfully created');
        $message->setId($id);
        return $message;
    }
}
```

You can find more information at the [repository](https://github.com/apioo/psx).
