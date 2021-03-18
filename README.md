This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Stampix-test

This is my finished test for a Stampix job application. I was asked to replicate the landing page below using create-react-app. Additionally, however, the finished product needed to feature internationalisation (referred to as intl or i18n in the community), meaning the copy on the page had to be translated into both French and Dutch. The quality of the translations was less important than the actual switching itself.

![Original Stampix design](https://user-images.githubusercontent.com/54646908/111588380-c47f9480-87c3-11eb-9412-f522d501d30e.png)
###### Original Stampix design :sunrise_over_mountains:

### Internationalisation

To achieve this, I used React Intl by Format.js. React Intl uses a higher level context provider, known as IntlProvider, to _provide_ message translations to nested components. In React, you can use these translations by using a special component called FormattedMessage and passing it a matching id that corresponds to a translation you have predefined. I first provided these translattions very directly, by passing them as props from a mid level component. That component would figure out the locale through Context, and then run an if else if-statement in a useEffect hook to return the proper values. This was effective, but made for some repeat code, and wouldn't really scale well at all since the values were all hardcoded into the mid level components. With any expansion, the codebase would become unwieldy. In the end, I lifted the IntlProvider up to the highest level in this set of three components and had it figure out which translations to use via dynamic imports and simply passing this data into the messages prop. This is the end result.

![HOC with IntlProvider](https://user-images.githubusercontent.com/54646908/111588061-58049580-87c3-11eb-9000-e90495606b5d.png)
###### HOC with IntlProvider :outbox_tray:


In this way, all four components (LandingPage, Businesses/Consumers, Content, Button: high, mid, low, lowest) have access to the translations. The mid level component cleans up a lot, and only provides relevant props to the lowest level component, in this case Content. Because I needed two sets of translations for two unique boxes of content, I provided more detailed ids in the translations, and then passed these specific ids as props to the Content component. So where the Content component takes on very generic props, the mid level components (Businesses & Consumers) each provide unique values to these props, like this:

![Mid level Business component with unique prop values](https://user-images.githubusercontent.com/54646908/111588060-576bff00-87c3-11eb-913c-8ad21aa13472.png)
###### Mid level Business component with unique prop values :electric_plug:


Likewise, the Consumers component will provide different values to the same props, namely the same but with "businesses" swapped out for "consumers". The lowest level component cleans up a lot versus when I used the useEffect hook on mid level, and passes props to the id attributes on the FormattedMessage components:

![Low level Content component with props as... props](https://user-images.githubusercontent.com/54646908/111587977-3a373080-87c3-11eb-9fcc-96d7b95812a7.png)
###### Low level Content component with props as... props :tada:


Initially, it was a bit of a struggle to rewire the app, mostly because I feared I would have to break up my Content component (my baby) into two more distinct components to provide for the proper message translations. Luckily, however, once I figured out how to fetch the data from the compiled translations (cf. infra), this was as easy as passing unique string values as props further down, as you see above.

### Fun with buttons

For this project, I also made two button components. One is pictured here: the very lowest level component that is a child of the Content component.

![Lowest level Button component that still renders a FormattedMessage component](https://user-images.githubusercontent.com/54646908/111588055-563ad200-87c3-11eb-94dd-373edc1af058.png)
###### Lowest level Button component that still renders a FormattedMessage component :radio_button:


This button also has access to the data fetched in the high level component, and is used very similarly to the higher level components. This component was the first component I made and inspired the Content component. The similarities in the original design warranted very generic components that would get filled in differently using props. You may have noticed the Businesses component (cf. supra) has another prop called "bg". This prop is also passed to Content and is there added to the className of the content box, giving it a different background color to the Consumers component which features a yellow background instead.

The header of course also uses buttons, which is where the second button (ContextButton) comes in.

![Header list item tags that render a Contextbutton as child with a distinct value prop](https://user-images.githubusercontent.com/54646908/111588057-56d36880-87c3-11eb-9829-3564f7520139.png)
###### Header list item tags that render a Contextbutton as child with a distinct value prop :black_square_button:


These buttons just read and update the Context. So when "nl" is clicked, the Context is updated to "nl," which then triggers the fetch in the HOC and finally rerenders the content components to reflect the change in translation. Both of these buttons are very generic components that take a couple of props, such as text and href in the case of the content button, to render a more specific instance.

### Testing testing

For this test, Stampix asked me to, well, test the app. "Quality over quantity," so I wrote two simple unit tests for the Context. Because I used Context to trigger the data fetching, I decided to test this pretty much exclusively. The whole app relies on the Context working, so testing to see if Context: renders, and then is callable, tells you if the app works or not.

![Testing: is this on?](https://user-images.githubusercontent.com/54646908/111588053-55a23b80-87c3-11eb-9d1c-9eee024cf187.png)
###### Testing: is this on? :microphone:


The first test checks to see if Context renders properly. For that, a simple snapshot test suffices. The second test checks to see if the ContextButton properly calls the changeLanguage function that's defined in the Context. I set up the values, and set the changeLanguage function as jest.fn(). When the button is clicked, the onClick handler should activate, which I check directly by expecting the function call to be truthy. If I expected it to be falsy, the test would fail because the function is called in the test (which I also checked for just to see if the test was set up correctly). 

Testing in React 17 was not easy. Enzyme's own adapter is only caught up to React 16, so I needed to include an unofficial adapter to make it work. But once that was properly installed (cf. package.json), the tests went smoothly.

### Define, extract, compile

To use translations with React Intl, you first have to define your translations. This can be done anywhere using the defineMessages function that comes with React Intl. You set the .json within the function, and then have to extract your translations. Once that's done, you need to compile your translations into even more .json. Since I was translating three times, for English, French, and Dutch, I found it bothersome to run three commands, and then three more, just to have my data ready. If I wanted to change translations, I would have to run six commands again. There had to be a better way. So I installed npm-run-all and set two scripts that each run three scripts, one runs the extract scripts and the other runs the compile scripts. I cut the script size down from n to two: if more language need to be added, n will increase, but my current setup means I will only ever have to run a constant two scripts. Pretty chuffed about that.

![From n to just two](https://user-images.githubusercontent.com/54646908/111588043-533fe180-87c3-11eb-8769-a631f5de9706.png)
###### From n to just two :8ball:


## Conclusion

There's still a lot more fun stuff that I did in this app, but these would be the main ones; the highlights that set this project apart from my previous ones. Even though this was a test for a job application, I still wanted to write a custom README and go over some of the fun stuff because I did really enjoy this project. I had never worked with intl before, nor had I really done much testing in my own projects hosted online. So putting all of it together in React, and not relying on tutorials to get me there, was a great learning experience. There's undoubtedly things I could improve on still, as is the case with any project, but I'm very satisfied with the end result. So much so that I don't know if I'll come back to improve it at least in the very near future. 

On to the next one!
