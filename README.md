# Custom-directives-in-Angular
4 types of directives:

1. Element (Use this when you are creating a component)
2. Attribute (Use this when you are decorating an existing element with new functionality)
3. CSS class
4. Comment


Matching Directives:

1. Directives are markers on a DOM element.
2. Directives tell Angular's HTML compiler($compile) to attach a specified behavior to DOM elements.
3. The compilation is a process of walking the DOM tree and matching DOM elements to directives.

Directives Normalization:

- In .js, directives names are in camelCase(myDir).
- In .html, directives names are in lower-case (< my-dir >< /my-dir > or < div my-dir >< /div >).

Scope:

- By default, a directive shares whatever scope was defined above it. (exact same scope object)
- scope: true, and scope: {},  both will created a child scope for the directive.
  - scope: true,    inherit the properties from the parent.
  - scope: {},      will not inherit the properties from the parent and hence called isolated. (The directive isolates everything except models(customerInfo) you added to the scope:{})
  
link function:

- used to manipulate the DOM.
- link: function($scope, element, attrs) 3 parameters
  1.the scope.
  2.the element that the directive is associated with.
  3.the attributes of the target element.
