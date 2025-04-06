import 'package:flutter/material.dart';

class AppLocalizations {
  static String getHello(BuildContext context) {
    return Localizations.localeOf(context).languageCode == 'es' ? 'Hola' : 'Hello';
  }
}
