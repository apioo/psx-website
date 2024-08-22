<?php

$files = [
    __DIR__ . '/../../projects/psx/README.md' => __DIR__ . '/docs/intro.md',
    __DIR__ . '/../../projects/psx-components/psx-api/README.md' => __DIR__ . '/docs/components/api.md',
    __DIR__ . '/../../projects/psx-components/psx-schema/README.md' => __DIR__ . '/docs/components/schema.md',
    __DIR__ . '/../../projects/psx-components/psx-data/README.md' => __DIR__ . '/docs/components/data.md',
    __DIR__ . '/../../projects/psx-components/psx-sql/README.md' => __DIR__ . '/docs/components/sql.md',
    __DIR__ . '/../../projects/psx-components/psx-openapi/README.md' => __DIR__ . '/docs/components/openapi.md',
    __DIR__ . '/../../projects/psx-components/psx-asyncapi/README.md' => __DIR__ . '/docs/components/asyncapi.md',
    __DIR__ . '/../../projects/psx-components/psx-openrpc/README.md' => __DIR__ . '/docs/components/openrpc.md',
    __DIR__ . '/../../projects/psx-components/psx-record/README.md' => __DIR__ . '/docs/components/record.md',
    __DIR__ . '/../../projects/psx-components/psx-datetime/README.md' => __DIR__ . '/docs/components/datetime.md',
    __DIR__ . '/../../projects/psx-components/psx-uri/README.md' => __DIR__ . '/docs/components/uri.md',
];

$index = 1;
foreach ($files as $source => $dest) {
    echo 'Update ' . pathinfo($dest, PATHINFO_BASENAME) . "\n";

    $content = file_get_contents($source);
    if (str_ends_with($dest, 'intro.md')) {
        $content = str_replace('## About', '## Introduction', $content);
    }

    $prefix = <<<TEXT
---
sidebar_position: {$index}
---

TEXT;

    file_put_contents($dest, $prefix . $content);
    $index++;
}

