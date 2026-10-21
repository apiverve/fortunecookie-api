# Fortune Cookie Generator API - Ruby Gem

Fortune Cookie Generator creates authentic fortune cookie messages including wisdom, predictions, advice, humor, and motivational quotes.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_fortunecookie'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_fortunecookie
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_fortunecookie'

# Initialize the client
client = APIVerve::Fortunecookie::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({  })
  puts response["data"]
rescue APIVerve::Fortunecookie::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Fortunecookie::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Fortunecookie::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/fortunecookie?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/fortunecookie?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/fortunecookie?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
