
# Attributes

At a PSX controller you can describe various information using attributes. It is required that you
controller method has at least a HTTP Method (one of `Get`, `Post`, `Put`, `Patch` or `Delete`) and
a `Path` attribute.

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

PSX tries to automatically add the missing attributes based on the defined arguments and return types.
If you like to explicit define the values you can use the following attributes.


| Attribute     | Target       | Example                     | Description                                           |
|---------------|--------------|-----------------------------|-------------------------------------------------------|
| Authorization | Class/Method | #[Authorization(true)]      | The operation needs authorization                     |
| Body          | Parameter    | #[Body]                     | Maps an argument to the HTTP body payload             |
| Delete        | Class/Method | #[Delete]                   | HTTP DELETE method                                    |
| Deprecated    | Class/Method | #[Deprecated(true)]         | The operation is deprecated                           |
| Description   | Class/Method | #[Description("foobar")]    | Description of this operation                         |
| Exclude       | Class/Method | #[Exclude]                  | Whether to exclude this operation                     |
| Get           | Class/Method | #[Get]                      | HTTP GET method                                       |
| Header        | Parameter    | #[Header]                   | Maps an argument to a value from the HTTP header      |
| OperationId   | Class/Method | #[OperationId("my.method")] | The operation id                                      |
| Param         | Parameter    | #[Param]                    | Maps an argument to a dynamic path fragment           |
| Patch         | Class/Method | #[Patch]                    | HTTP PATCH method                                     |
| Path          | Class/Method | #[Path("/endpoint")]        | The endpoint path                                     |
| Post          | Class/Method | #[Post]                     | HTTP POST method                                      |
| Put           | Class/Method | #[Put]                      | HTTP PUT method                                       |
| Query         | Parameter    | #[Query]                    | Maps an argument to a value from the query parameters |
| Security      | Class/Method | #[Security(["scope"])]      | The scopes assigned to this operations                |
| StatusCode    | Class/Method | #[StatusCode(201)]          | Describes the response status code                    |
| Tags          | Class/Method | #[Tags(["tag"])]            | Tags assigned to this operation                       |
