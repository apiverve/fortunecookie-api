# Fortune Cookie Generator API - Dart/Flutter Client

Fortune Cookie Generator creates authentic fortune cookie messages including wisdom, predictions, advice, humor, and motivational quotes.

[![pub package](https://img.shields.io/pub/v/apiverve_fortunecookie.svg)](https://pub.dev/packages/apiverve_fortunecookie)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Fortune Cookie Generator API](https://apiverve.com/marketplace/fortunecookie?utm_source=dart&utm_medium=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_fortunecookie: ^1.1.14
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_fortunecookie/apiverve_fortunecookie.dart';

void main() async {
  final client = FortunecookieClient('YOUR_API_KEY');

  try {
    final response = await client.execute();

    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

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

## API Reference

- **API Home:** [Fortune Cookie Generator API](https://apiverve.com/marketplace/fortunecookie?utm_source=dart&utm_medium=readme)
- **Documentation:** [docs.apiverve.com/ref/fortunecookie](https://docs.apiverve.com/ref/fortunecookie?utm_source=dart&utm_medium=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=readme)
