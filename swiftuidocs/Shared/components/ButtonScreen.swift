//
//  ButtonScreen.swift
//  Shared
//
//  Created by Anton Kuznetsov on 28.06.2020.
//

import SwiftUI

struct ButtonScreen: View {
  var body: some View {
    Button(action: {}, label: {
      Text("Button")
    }).padding()
  }
}

struct ButtonScreen_Previews: PreviewProvider {
  static var previews: some View {
    ButtonScreen()
  }
}
