import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import {AiOutlineCodeSandbox} from "react-icons/ai";
import {BiCodeBlock} from "react-icons/bi";
import {VscDebugDisconnect} from "react-icons/vsc";
import {DiDoctrine, DiSymfonyBadge, SiOpenapiinitiative} from "react-icons/all";

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
                Client SDK generator which supports <b>TypeScript</b>, <b>PHP</b>, <b>Java</b>, <b>Go</b>
            </>
        ),
    },
    {
        title: 'OpenAPI',
        Svg: SiOpenapiinitiative,
        description: (
            <>
                <a href="https://www.openapis.org/">OpenAPI</a> generation
            </>
        ),
    },
    {
        title: 'TypeSchema',
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
            </div>
        </section>
    );
}
