# Fortune Cookie Generator API - Go Client

Fortune Cookie Generator creates authentic fortune cookie messages including wisdom, predictions, advice, humor, and motivational quotes.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Go client for the [Fortune Cookie Generator API](https://apiverve.com/marketplace/fortunecookie?utm_source=go&utm_medium=readme)

---

## Installation

```bash
go get github.com/apiverve/fortunecookie-api/go
```

---

## Configuration

Before using the Fortune Cookie Generator API client, you need to obtain your API key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=go&utm_medium=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=go&utm_medium=readme)

The Fortune Cookie Generator API documentation is found here: [https://docs.apiverve.com/ref/fortunecookie](https://docs.apiverve.com/ref/fortunecookie?utm_source=go&utm_medium=readme)

---

## Usage

```go
package main

import (
    "fmt"
    "log"

    "github.com/apiverve/fortunecookie-api/go"
)

func main() {
    // Create a new client
    client := fortunecookie.NewClient("YOUR_API_KEY")

    // Make the request
    response, err := client.Execute(nil)
    if err != nil {
        log.Fatal(err)
    }

    fmt.Printf("Status: %s\n", response.Status)
    fmt.Printf("Data: %+v\n", response.Data)
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "count": 3,
    "requested_type": "wisdom",
    "fortunes": [
      {
        "fortune": "When the winds of change blow, some build walls, others build windmills.",
        "type": "wisdom",
        "lucky_numbers": [
          16,
          25,
          44,
          88,
          97,
          99
        ]
      },
      {
        "fortune": "The best time to plant a tree was 20 years ago. The second best time is now.",
        "type": "wisdom",
        "lucky_numbers": [
          26,
          31,
          34,
          48,
          62,
          68
        ]
      },
      {
        "fortune": "He who knows others is wise; he who knows himself is enlightened.",
        "type": "wisdom",
        "lucky_numbers": [
          13,
          25,
          33,
          59,
          79,
          83
        ]
      }
    ],
    "available_types": [
      "all",
      "wisdom",
      "prediction",
      "advice",
      "humor",
      "motivational"
    ]
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=go&utm_medium=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=go&utm_medium=readme), [Privacy Policy](https://apiverve.com/privacy?utm_source=go&utm_medium=readme), and [Refund Policy](https://apiverve.com/refund?utm_source=go&utm_medium=readme).

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
