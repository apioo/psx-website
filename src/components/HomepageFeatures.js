import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import {AiOutlineCodeSandbox} from "react-icons/ai";
import {BiCodeBlock} from "react-icons/bi";
import {VscDebugDisconnect} from "react-icons/vsc";
import {DiDoctrine, DiSymfonyBadge} from "react-icons/di";
import {SiOpenapiinitiative} from "react-icons/si";
import CodeBlock from '@theme/CodeBlock';

const FeatureList = [
    {
        title: 'Typed controller',
        Svg: AiOutlineCodeSandbox,
        description: (
            <>
                Fully typed controller classes.
            </>
        ),
    },
    {
        title: 'Client SDK',
        Svg: BiCodeBlock,
        description: (
            <>
                Client SDK generator
            </>
        ),
    },
    {
        title: 'OpenAPI',
        Svg: SiOpenapiinitiative,
        description: (
            <>
                <a href="https://www.openapis.org/">OpenAPI</a> generator
            </>
        ),
    },
    {
        title: 'Model',
        Svg: VscDebugDisconnect,
        description: (
            <>
                Generate model classes based on a <a href="https://typeschema.org/">TypeSchema</a> specification
            </>
        ),
    },
    {
        title: 'Symfony DI',
        Svg: DiSymfonyBadge,
        description: (
            <>
                Uses the Symfony <a href="https://github.com/symfony/dependency-injection">DI container</a> component
            </>
        ),
    },
    {
        title: 'Doctrine DBAL',
        Svg: DiDoctrine,
        description: (
            <>
                Works with Doctrine <a href="https://github.com/doctrine/dbal">DBAL</a> and <a href="https://github.com/doctrine/migrations">migrations</a>
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} alt={title}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
                <div className="row">
                    <div className="col col--12 text--center">
                        <hr></hr>
                        <h1 className="hero__title">Controller</h1>
                        <p className="hero__subtitle">PSX allows you to define complete type-safe controllers which map
                            every value from the HTTP request to an argument.
                            This idea is inspired by great frameworks like <a href="https://spring.io/">Spring</a> or <a
                            href="https://nestjs.com/">NestJS</a>.</p>
                    </div>
                    <div className="col col--12">
                        <CodeBlock language="php" title="src/Controller/Population.php" showLineNumbers>{`class Population extends ControllerAbstract
{
    #[Get]
    #[Path('/population')]
    public function getAll(#[Query] ?int $startIndex = null, #[Query] ?int $count = null): Model\\PopulationCollection
    {
        // @TODO return population entries
    }

    #[Post]
    #[Path('/population')]
    #[StatusCode(201)]
    public function create(#[Body] Model\\Population $payload): Model\\Message
    {
        // @TODO create population entry
    }
}
`}</CodeBlock>
                    </div>
                </div>
                <div className="row">
                    <div className="col col--12 text--center">
                        <hr></hr>
                        <h1 className="hero__title">Dependency Injection</h1>
                        <p className="hero__subtitle">A key concept in PSX is dependency injection. Internally we use
                            the Symfony <a
                                href="https://symfony.com/doc/current/components/dependency_injection.html">DependencyInjection</a> Component
                            to automatically inject all dependencies into your controller so that you can build a clean
                            architecture.</p>
                    </div>
                    <div className="col col--12">
                        <CodeBlock language="php" title="src/Controller/Population.php" showLineNumbers>{`class Population extends ControllerAbstract
{
    public function __construct(private MyService $myService)
    {
    }

    #[Post]
    #[Path('/population')]
    #[StatusCode(201)]
    public function create(#[Body] Model\\Population $payload): Model\\Message
    {
        $id = $this->myService->create($payload);

        $message = new Model\\Message();
        $message->setSuccess(true);
        $message->setMessage('Population record successfully created');
        $message->setId($id);
        return $message;
    }
}
`}</CodeBlock>
                    </div>
                </div>
                <div className="row">
                    <div className="col col--12 text--center">
                        <hr></hr>
                        <h1 className="hero__title">Client SDK</h1>
                        <p className="hero__subtitle">One of the innovative features of PSX is, that you can automatically
                        generate a client SDK for your API. Through a simple command you can generate
                        a complete type-safe client SDK to communicate with your API.</p>
                    </div>
                    <div className="col col--12">
                        <CodeBlock language="text" title="Console" showLineNumbers>{`php bin/psx generate:sdk`}</CodeBlock>
                    </div>
                </div>
            </div>
        </section>
    );
}
