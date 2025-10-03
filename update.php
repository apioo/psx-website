<?php

$files = [
    __DIR__ . '/../../projects/psx-components/psx-api/README.md' => __DIR__ . '/src/content/docs/components/api.md',
    __DIR__ . '/../../projects/psx-components/psx-schema/README.md' => __DIR__ . '/src/content/docs/components/schema.md',
    __DIR__ . '/../../projects/psx-components/psx-data/README.md' => __DIR__ . '/src/content/docs/components/data.md',
    __DIR__ . '/../../projects/psx-components/psx-sql/README.md' => __DIR__ . '/src/content/docs/components/sql.md',
    __DIR__ . '/../../projects/psx-components/psx-openapi/README.md' => __DIR__ . '/src/content/docs/components/openapi.md',
    __DIR__ . '/../../projects/psx-components/psx-openrpc/README.md' => __DIR__ . '/src/content/docs/components/openrpc.md',
    __DIR__ . '/../../projects/psx-components/psx-json/README.md' => __DIR__ . '/src/content/docs/components/json.md',
    __DIR__ . '/../../projects/psx-components/psx-nested/README.md' => __DIR__ . '/src/content/docs/components/nested.md',
    __DIR__ . '/../../projects/psx-components/psx-record/README.md' => __DIR__ . '/src/content/docs/components/record.md',
    __DIR__ . '/../../projects/psx-components/psx-datetime/README.md' => __DIR__ . '/src/content/docs/components/datetime.md',
    __DIR__ . '/../../projects/psx-components/psx-http/README.md' => __DIR__ . '/src/content/docs/components/http.md',
    __DIR__ . '/../../projects/psx-components/psx-uri/README.md' => __DIR__ . '/src/content/docs/components/uri.md',
    __DIR__ . '/../../projects/psx-components/psx-sandbox/README.md' => __DIR__ . '/src/content/docs/components/sandbox.md',
];

$index = 1;
foreach ($files as $source => $dest) {
    echo 'Update ' . pathinfo($dest, PATHINFO_BASENAME) . "\n";

    $lines = file($source);

    preg_match('/^# ([A-Za-z0-9]+)$/', trim($lines[1]), $matches);

    unset($lines[0]);
    $lines[1] = <<<TEXT
---
title: {$matches[1]}
---

TEXT;
    $lines[2] = '';

    file_put_contents($dest, implode('', $lines));
    $index++;
}

