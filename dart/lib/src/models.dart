/// Response models for the Fortune Cookie Generator API.

/// API Response wrapper.
class FortunecookieResponse {
  final String status;
  final dynamic error;
  final FortunecookieData? data;

  FortunecookieResponse({
    required this.status,
    this.error,
    this.data,
  });

  factory FortunecookieResponse.fromJson(Map<String, dynamic> json) => FortunecookieResponse(
    status: json['status'] as String? ?? '',
    error: json['error'],
    data: json['data'] != null ? FortunecookieData.fromJson(json['data']) : null,
  );

  Map<String, dynamic> toJson() => {
    'status': status,
    if (error != null) 'error': error,
    if (data != null) 'data': data,
  };
}

/// Response data for the Fortune Cookie Generator API.

class FortunecookieData {
  int? count;
  String? requestedType;
  List<FortunecookieDataFortunesItem>? fortunes;
  List<String>? availableTypes;

  FortunecookieData({
    this.count,
    this.requestedType,
    this.fortunes,
    this.availableTypes,
  });

  factory FortunecookieData.fromJson(Map<String, dynamic> json) => FortunecookieData(
      count: json['count'],
      requestedType: json['requested_type'],
      fortunes: (json['fortunes'] as List?)?.map((e) => FortunecookieDataFortunesItem.fromJson(e)).toList(),
      availableTypes: (json['available_types'] as List?)?.cast<String>(),
    );
}

class FortunecookieDataFortunesItem {
  String? fortune;
  String? type;
  List<int>? luckyNumbers;

  FortunecookieDataFortunesItem({
    this.fortune,
    this.type,
    this.luckyNumbers,
  });

  factory FortunecookieDataFortunesItem.fromJson(Map<String, dynamic> json) => FortunecookieDataFortunesItem(
      fortune: json['fortune'],
      type: json['type'],
      luckyNumbers: (json['lucky_numbers'] as List?)?.cast<int>(),
    );
}
