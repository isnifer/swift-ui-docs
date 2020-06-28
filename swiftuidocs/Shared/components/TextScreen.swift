//
//  TextScreen.swift
//  swiftuidocs
//
//  Created by Anton Kuznetsov on 28.06.2020.
//  Copyright © 2020 SwiftUI Docs. All rights reserved.
//

import SwiftUI

struct TextScreen: View {
    var body: some View {
      VStack {
        Text("Hello World")
          .baselineOffset(10.0)
          .bold()
          .font(.title3)
          .fontWeight(.heavy)
          .foregroundColor(Color.blue)
          .italic()
          .kerning(2.0)
          .strikethrough(true, color: Color.red)
          .tracking(CGFloat(4.0))
          .underline(true, color: Color.yellow)
          .accentColor(.green)
      }
    }
}

struct TextScreen_Previews: PreviewProvider {
    static var previews: some View {
        TextScreen()
    }
}
