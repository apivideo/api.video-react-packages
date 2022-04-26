[![badge](https://img.shields.io/twitter/follow/api_video?style=social)](https://twitter.com/intent/follow?screen_name=api_video) &nbsp; [![badge](https://img.shields.io/github/stars/apivideo/api.video-react-player?style=social)](https://github.com/apivideo/api.video-react-player) &nbsp; [![badge](https://img.shields.io/discourse/topics?server=https%3A%2F%2Fcommunity.api.video)](https://community.api.video)
![](https://github.com/apivideo/API_OAS_file/blob/master/apivideo_banner.png)
<h1 align="center">api.video React upload button</h1>

![npm](https://img.shields.io/npm/v/@api.video/react-player) ![ts](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label)

[api.video](https://api.video) is the video infrastructure for product builders. Lightning fast video APIs for integrating, scaling, and managing on-demand & low latency live streaming features in your app.

# Table of contents

- [Table of contents](#table-of-contents)
- [Project description](#project-description)
- [Getting started](#getting-started)
  - [Retrieve your upload token](#retrieve-your-upload-token)
  - [Installation](#installation)
  - [Basic usage](#basic-usage)
- [Documentation](#documentation)
  - [Props](#props)
    - [children](#children)
    - [uploadToken](#uploadtoken)
    - [style](#style)
    - [onUploadProgress](#onuploadprogress)
    - [onUploadSuccess](#onuploadsuccess)
    - [onUploadError](#onuploaderror)

# Project description

Customizable React button to upload to your [api.video account](https://dashboard.api.video).

# Getting started

## Retrieve your upload token

You'll need an upload token to use this component and upload to api.video.
To get yours, follow these steps:

1. [Log into your account](https://dashboard.api.video/login) or create one [here](https://dashboard.api.video/register).
2. Go to [the official api.video documentation](https://docs.api.video/docs).
3. Log into your account in the top right corner. If it's already done, be sure it's the account you want to use.
4. Go to API reference -> Upload Tokens -> Generate an upload token
5. Generate your upload token by clicking the "Try It!" button in the right section
6. Copy the "token" value from the response in the right section.

## Installation

```sh
npm install @api.video/upload-button
# or
yarn add @api.video/upload-button
```

## Basic usage

```typescript
import { UploadButton } from "@api.video/upload-button"

export default function MyComponent() {
  return <UploadButton uploadToken="YOUR_UPLOAD_TOKEN">Upload Button</UploadButton>
}
```

# Documentation

## Props

| Name             | Type                                    | Mandatory | Example                                           |
| ---------------- | --------------------------------------- | --------- | ------------------------------------------------- |
| children         | React.ReactNode                         | Yes       |                                                   |
| uploadToken      | string                                  | Yes       |                                                   |
| style            | React.CSSProperties                     | No        | { color: 'blue', background: 'red, }              |
| onUploadProgress | (progress: UploadProgressEvent) => void | No        | (progress) => console.log(progress.uploadedBytes) |
| onUploadSuccess  | (video: VideoUploadResponse) => void    | No        | (video) => console.log(video)                     |
| onUploadError    | (errorMessage: string) => void          | No        | (errorMessage) => console.log(errorMessage)       |

### children

A ReactNode children.

Example:

```typescript
import { UploadButton } from "@api.video/upload-button"

export default function MyComponent() {
  return <UploadButton>Click Me</UploadButton>
}
```

### uploadToken

Your upload token, mandatory to upload a video to your api.video account.

Example:

```typescript
import { UploadButton } from "@api.video/upload-button"

export default function MyComponent() {
  return (
    <UploadButton 
      // ...
      uploadToken="YOUR_UPLOAD_TOKEN"
      // ...
    >
      Click Me
    </UploadButton>
  )
}
```

### style 

A React.CSSProperties object, used for component styling.

Example:

```typescript
import { UploadButton } from "@api.video/upload-button"

export default function MyComponent() {
  return (
    <UploadButton 
      // ...
      style={{ color: 'blue', background: 'red', }}
      // ...
    >
      Click Me
    </UploadButton>
  )
}
```

### onUploadProgress

Callback called during the uploading process.
An UploadProgressEvent object is accessible from it.
Check the official documentation [here](https://github.com/apivideo/api.video-typescript-uploader#onprogress).

Example:

```typescript
import { UploadButton } from "@api.video/upload-button"

export default function MyComponent() {
  return (
    <UploadButton 
      // ...
      onUploadProgress={(progress) => console.log(progress.uploadedBytes)}
      // ...
    >
      Click Me
    </UploadButton>
  )
}
```

### onUploadSuccess

Callback called after the upload process has been completed.
A Video object is accessible from it.
Check the official documentation [here](https://github.com/apivideo/api.video-nodejs-client/blob/main/doc/model/Video.md).

Example:

```typescript
import { UploadButton } from "@api.video/upload-button"

export default function MyComponent() {
  return (
    <UploadButton 
      // ...
      onUploadSuccess={(video) => console.log(video.videoId)}
      // ...
    >
      Click Me
    </UploadButton>
  )
}
```

### onUploadError

Callback called in case of an error during the uploading process.
An error message object is accessible from it.

Example:

```typescript
import { UploadButton } from "@api.video/upload-button"

export default function MyComponent() {
  return (
    <UploadButton 
      // ...
      onUploadError={(errorMessage) => console.log(errorMessage)}
      // ...
    >
      Click Me
    </UploadButton>
  )
}
```
