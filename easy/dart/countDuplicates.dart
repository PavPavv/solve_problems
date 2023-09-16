class Item {
  late int item;
  late int count;
  late List<int> index;

  Item(this.item, this.count, this.index);
}

class CountDuplicates {
  static result(List<int> arr) {
    Map<String, dynamic> map = new Map<String, dynamic>();
    List result = [];

    for (int i = 0; i < arr.length; i++) {
      var elem = arr[i];
      if (map.containsKey('$elem')) {
        map['$elem']['count'] += 1;
        map['$elem']['index'].add(i);
      } else {
        map['$elem'] = {
          'item': elem,
          'count': 1,
          'index': [i],
        };
      }
    }

    map.forEach((key, value) {
      if (value['count'] > 1) {
        result.add(value);
      }
    });

    return result;
  }
}
