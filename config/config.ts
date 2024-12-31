/*
 * Copyright (c) 2023 Yookue Ltd. All rights reserved.
 *
 * Licensed under the MIT License.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 */


import nodePath from 'node:path';
import globalSettings from './globalSettings';


/**
 * Configuration for dumi
 *
 * @author David Hsing
 *
 * @see "https://v1.d.umijs.org/config"
 */
export default {
    base: `${globalSettings.context?.root}/`,
    publicPath: `${globalSettings.context?.root}/`,
    title: 'Yookue',
    logo: `${globalSettings.context?.assets}/ico/logo-icon.svg`,
    locales: [
        ['en-US', 'English'],
        ['zh-CN', '简体中文'],
        ['zh-TW', '繁體中文']
    ],
    metas: [
        {
            name: 'keywords',
            content: 'Yookue, 攸科, 攸科网络, 攸科科技',
        }
    ],
    favicon: `${globalSettings.context?.root}/favicon.ico`,
    links: [
        { rel: 'icon', type: 'image/svg+xml', href: `${globalSettings.context?.assets}/ico/logo-icon.svg` },
        { rel: 'fluid-icon', type: 'image/svg+xml', href: `${globalSettings.context?.assets}/ico/logo-icon.svg` },
        { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.font.im/css?family=Comfortaa' },
        { rel: 'stylesheet', type: 'text/css', href: `${globalSettings.context?.assets}/css/overlay.css` },
        { rel: 'stylesheet', type: 'text/css', href: `${globalSettings.context?.assets}/css/darkness.css` },
    ],
    navs: {
        'en-US': [
            null,
            {
                title: 'GitHub',
                path: `https://github.com/yookue`,
            }
        ],
        'zh-CN': [
            null,
            {
                title: 'GitHub',
                path: `https://github.com/yookue`,
            }
        ],
        'zh-TW': [
            null,
            {
                title: 'GitHub',
                path: `https://github.com/yookue`,
            }
        ]
    },
    cssLoader: {
        localsConvention: 'camelCase',
    },
    styles: [
        `
        .__dumi-default-layout-hero {
            background: url("${globalSettings.context?.assets}/img/home/hero-bg-1.svg") !important;
        }
        `,
    ],
    resolve: {
        includes: ['docs'],
    },
    outputPath: 'docs-dist',
    alias: {
        '#': nodePath.resolve(__dirname, '..'),
        '@': nodePath.resolve(__dirname, '../src'),
    },
    apiParser: {
        propFilter: {
            skipNodeModules: true,
        }
    },
    mode: 'site',
    exportStatic: {},
    fastRefresh: {},
    hash: true,
    webpack5: {},
    // mfsu: {},
};
