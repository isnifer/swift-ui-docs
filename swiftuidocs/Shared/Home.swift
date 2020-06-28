//
//  Home.swift
//  swiftuidocs
//
//  Created by Anton Kuznetsov on 28.06.2020.
//  Copyright © 2020 SwiftUI Docs. All rights reserved.
//

import SwiftUI

struct Home: View {
    var body: some View {
      NavigationView {
        VStack {
          DisclosureGroup(
            content: {
              Text("A view that displays one or more lines of read-only text.")
            },
            label: {
              NavigationLink("Text", destination: TextScreen())
            }
          ).padding()          
          
          Spacer()
        }
        
        .navigationBarTitle(Text("Swift UI Docs"))
      }
    }
}

struct Home_Previews: PreviewProvider {
    static var previews: some View {
        Home()
    }
}
