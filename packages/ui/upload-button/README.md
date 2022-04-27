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
2. Copy your API key (sandbox or production if you are subscribed to one of our [plan](https://api.video/pricing)).
3. Go to [the official api.video documentation](https://docs.api.video/docs).
4. Log into your account in the top right corner. If it's already done, be sure it's the account you want to use.
5. Go to API reference -> Upload Tokens -> Generate an upload token
6. On the right, be sure the "Authentication" section contains the API key you want to use.
7. Generate your upload token by clicking the "Try It!" button in the right section
8. Copy the "token" value from the response in the right section.

## Installation

```sh
npm install @api.video/react-upload-button
# or
yarn add @api.video/react-upload-button
```

## Basic usage

```typescript
import { UploadButton } from "@api.video/react-upload-button"

export default function MyComponent() {
  return <UploadButton uploadToken="YOUR_UPLOAD_TOKEN">Click Me</UploadButton>
}
```

# Documentation

## Props

| Name             | Type                                    | Mandatory | Description                                                      |
| ---------------- | --------------------------------------- | --------- | ---------------------------------------------------------------- |
| children         | React.ReactNode                         | Yes       | The button's children                                            |
| uploadToken      | string                                  | Yes       | Your upload token                                                |
| style            | React.CSSProperties                     | No        | An object of style                                               |
| onUploadProgress | (progress: UploadProgressEvent) => void | No        | Callback called during the uploading process                     |
| onUploadSuccess  | (video: VideoUploadResponse) => void    | No        | Callback called after the upload process has been completed      |
| onUploadError    | (errorMessage: string) => void          | No        | Callback called in case of an error during the uploading process |

### children

A ReactNode children.

Example:

```typescript
import { UploadButton } from "@api.video/react-upload-button"

export default function MyComponent() {
  return <UploadButton>Click Me</UploadButton>
}
```

### uploadToken

Your upload token, mandatory to upload a video to your api.video account.

Example:

```typescript
import { UploadButton } from "@api.video/react-upload-button"

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
import { UploadButton } from "@api.video/react-upload-button"

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
An UploadProgressEvent object is accessible from it:

- uploadedBytes (number): total number of bytes uploaded for this upload
- totalBytes (number): total size of the file
- chunksCount (number): number of upload chunks
- chunksBytes (number): size of a chunk
- currentChunk (number): index of the chunk being uploaded
- currentChunkUploadedBytes (number): number of bytes uploaded for the current chunk

Example:

```typescript
import { UploadButton } from "@api.video/react-upload-button"

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
Check the [official documentation](https://github.com/apivideo/api.video-nodejs-client/blob/main/doc/model/Video.md).

Example:

```typescript
import { UploadButton } from "@api.video/react-upload-button"

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
A string error message is accessible from it.

Example:

```typescript
import { UploadButton } from "@api.video/react-upload-button"

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
