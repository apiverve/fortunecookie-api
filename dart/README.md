# Fortune Cookie Generator API - Dart/Flutter Client

Fortune Cookie Generator creates authentic fortune cookie messages including wisdom, predictions, advice, humor, and motivational quotes.

[![pub package](https://img.shields.io/pub/v/apiverve_fortunecookie.svg)](https://pub.dev/packages/apiverve_fortunecookie)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Fortune Cookie Generator API](https://apiverve.com/marketplace/fortunecookie?utm_source=dart&utm_medium=referral&utm_content=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_fortunecookie: ^1.2.5
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
    "fortune": "The best time to plant a tree was 20 years ago. The second best time is now.",
    "type": "wisdom"
  }
}
```

## API Reference

- **API Home:** [Fortune Cookie Generator API](https://apiverve.com/marketplace/fortunecookie?utm_source=dart&utm_medium=referral&utm_content=readme)
- **Documentation:** [docs.apiverve.com/ref/fortunecookie](https://docs.apiverve.com/ref/fortunecookie?utm_source=dart&utm_medium=referral&utm_content=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme)
