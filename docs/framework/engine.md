
# Engine

Normally PHP apps are served through classical web servers like Apache or Nginx but there are currently also other ways
to run your app. We are very interested in those approaches and with PSX we have implemented an engine system to support
different runtimes. If we take a look at our `index.php` file:

```php
<?php

require_once(__DIR__ . '/../vendor/autoload.php');

$container = require_once(__DIR__ . '/../container.php');

$engine      = new \PSX\Engine\WebServer\Engine($container->getParameter('psx_url'));
$dispatcher  = $container->get(\PSX\Engine\DispatchInterface::class);
$environment = new \PSX\Framework\Environment\Environment($dispatcher, $engine);

return $environment->serve();

```

The `$engine` variable defines the engine which is used, by default we use a classical web server. If you want to
use a different web server like Amp, Swoole or RoadRunner you can use a specific engine. The following engines are
available:

* **Apache/NGINX**

  Classical web server like Apache or NGINX which uses either FCGI or includes
  PHP as module (Apache). This engine is included by default.

    * Class: `PSX\Engine\WebServer\Engine`

* **Amp**

  HTTP server completely written in PHP

    * Github: https://github.com/amphp/http-server
    * Package: `psx/engine-amp`
    * Class: `PSX\Engine\Amp\Engine`

* **Swoole**

  HTTP server written as PHP extension in C/C++

    * Github: https://github.com/swoole/swoole-src
    * Package: `psx/engine-swoole`
    * Class: `PSX\Engine\Swoole\Engine`

* **Roadrunner**

  HTTP server written in GO

    * Github: https://github.com/spiral/roadrunner
    * Package: `psx/engine-roadrunner`
    * Class: `PSX\Engine\Roadrunner\Engine`

