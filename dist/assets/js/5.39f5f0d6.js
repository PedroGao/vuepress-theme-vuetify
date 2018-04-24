(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{57:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"springboot-学习（二）——过滤器-filter-拦截器-intercepter-切面-aspect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot-学习（二）——过滤器-filter-拦截器-intercepter-切面-aspect","aria-hidden":"true"}},[t._v("#")]),t._v(" SpringBoot 学习（二）——过滤器 filter,拦截器 intercepter,切面 aspect")]),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),a("p",[t._v("SpringMvc 提高了良好的错误处理，和请求拦截和过滤。")]),a("h2",{attrs:{id:"使用-javaee-标准中的-filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-javaee-标准中的-filter","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 JavaEE 标准中的 Filter")]),a("p",[t._v("SpringMVC 可以很好的耦合 JavaEE 的 filter，具体的实现如下")]),a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" TimerFilter "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Filter "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("destroy")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Filter被销毁:"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("doFilter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" ServletRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" ServletResponse"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" chain"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" FilterChain"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" start "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time\n        "),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parameterMap"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        chain"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("doFilter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Filter耗时: '),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token delimiter variable"}},[t._v("${")]),a("span",{attrs:{class:"token function"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" start"),a("span",{attrs:{class:"token delimiter variable"}},[t._v("}")])]),t._v('ms"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("init")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" FilterConfig"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Filter初始化:"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("我们定义一个 Kotlin 的类然后继承 Filter 这个接口，会实现三个关于生命周期的方法 destroy，doFilter，init。简单在 doFilter 中实现一个时间的计时功能。为了使这个 TimerFilter 发挥作用，只需要简单在类上添加 Spring 的 Compoment 注解。Spring 会自动将这个自定义的 Filter 加入到运行项目中。")]),a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{attrs:{class:"token annotation builtin"}},[t._v("@Component")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" TimerFilter "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Filter\n")])]),a("p",[t._v("这个 filter 会在 spring 项目启动的时候的初始化，也就在还没有任何请求的情况下这个 filter 就已经初始化。而且它会作用在任何的请求上，但有时仅仅需要在一些请求上做 filter，因此我们可以通过配置的方法特定作用在某些请求上。首先删除掉 Component 注解。然后新建一个 Config 类 FilterConfig。")]),a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{attrs:{class:"token annotation builtin"}},[t._v("@Configuration")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" FilterConfig "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" WebMvcConfigurer "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n   "),a("span",{attrs:{class:"token operator"}},[t._v("..")]),a("span",{attrs:{class:"token operator"}},[t._v("..")]),a("span",{attrs:{class:"token operator"}},[t._v("..")]),a("span",{attrs:{class:"token operator"}},[t._v("..")]),a("span",{attrs:{class:"token operator"}},[t._v("..")]),a("span",{attrs:{class:"token operator"}},[t._v("..")]),a("span",{attrs:{class:"token operator"}},[t._v("..")]),t._v("\n\n    "),a("span",{attrs:{class:"token annotation builtin"}},[t._v("@Bean")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("timeFilter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" FilterRegistrationBean"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("TimerFilter"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" registrationBean "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" FilterRegistrationBean"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("TimerFilter"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" timerFilter "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("TimerFilter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        registrationBean"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" timerFilter\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" urls "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" arrayListOf"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        urls"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"/*"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        registrationBean"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("urlPatterns "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" urls\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" registrationBean\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("如果仅仅只是需要 filter 这个配置，是不需要继承 WebMvcConfigurer 这个类的，这个类主要用于引入 spring 提供的拦截器，后续会讲到。在这个 config 类中，定义一个返回 FilterRegistrationBean 的方法，它是由 spring 提供专门用于引入自定义 filter 的类。在初始化 registrationBean 后我们可以为它加入我们自定义的 filter 和我们需要拦截的 urls 然后将这个 bean 转交给 spring 管理。")]),a("h2",{attrs:{id:"使用-spring-的-interceptor-拦截-url-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-spring-的-interceptor-拦截-url-请求","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 spring 的 interceptor 拦截 url 请求")]),a("p",[t._v("SpringMVC 为我们提供了很好用的 interceptor 来处理这些 urls 请求。创建一个自定义的 intercepter 然后继承 HandlerInterceptor 这个接口。")]),a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{attrs:{class:"token annotation builtin"}},[t._v("@Component")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" TimerInterceptor "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" HandlerInterceptor "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("preHandle")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" HttpServletRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" HttpServletResponse"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Any"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Boolean "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"拦截器 prepare"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handler "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" HandlerMethod"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bean"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("javaClass"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handler"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        request"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("setAttribute")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"startTime"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 返回true才会进入controller处理")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("postHandle")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" HttpServletRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" HttpServletResponse"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Any"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" modelAndView"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" ModelAndView"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"拦截器 post"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" start "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getAttribute")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"startTime"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Long"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"拦截器耗时:'),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token delimiter variable"}},[t._v("${")]),a("span",{attrs:{class:"token function"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" start"),a("span",{attrs:{class:"token delimiter variable"}},[t._v("}")])]),t._v('ms"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("afterCompletion")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" HttpServletRequest"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" response"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" HttpServletResponse"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Any"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ex"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Exception"),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"拦截器 post"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" start "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getAttribute")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"startTime"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Long"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"拦截器耗时:'),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token delimiter variable"}},[t._v("${")]),a("span",{attrs:{class:"token function"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" start"),a("span",{attrs:{class:"token delimiter variable"}},[t._v("}")])]),t._v('ms"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"ex is : '),a("span",{attrs:{class:"token interpolation variable"}},[t._v("$ex")]),t._v('"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("HandlerInterceptor 是 spring 提供的一个用于预处理 urls 的拦截器。继承这个接口必须实现 preHandle，postHandle，afterCompletion 这三个方法。")]),a("ol",[a("li",[t._v("preHandle：预处理 urls，返回 flase 则不会进入 controller，返回 true 则会进入 controller。")]),a("li",[t._v("postHandle： 传递 handle 给 spring，具体的时间如下：\n"),a("code",[t._v("Called after HandlerAdapter actually * invoked the handler, but before the DispatcherServlet renders the view.")]),t._v("这个方法会在 HandlerAdapter 接受这个 interceptor 之后调用，但是 DispatcherServlet 渲染视图之前被调用。")]),a("li",[t._v("afterCompletion： 处理完成这个请求后会调用这个方法。")])]),a("h2",{attrs:{id:"aop-方式处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aop-方式处理","aria-hidden":"true"}},[t._v("#")]),t._v(" aop 方式处理")]),a("p",[t._v("aop（面向切面编程）是 spring 核心的功能，能很好的无侵入性的添加功能。因此可以通过 aop 来在 urls 请求的过程中来增强。首先，配置一个切面")]),a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{attrs:{class:"token annotation builtin"}},[t._v("@Aspect")]),t._v("\n"),a("span",{attrs:{class:"token annotation builtin"}},[t._v("@Component")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" TimerAspect "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token annotation builtin"}},[t._v("@Around")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"execution(* com.pedro.kblog.controller.UserController.*(..))"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("fun")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("handleControllerMethod")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pjp"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" ProceedingJoinPoint"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Any "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"切面开始:"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" args "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" pjp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("args\n        args"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("forEach")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" arg "),a("span",{attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" start "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("val")]),t._v(" any "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" pjp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("proceed")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"切面耗时:'),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token delimiter variable"}},[t._v("${")]),a("span",{attrs:{class:"token function"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" start"),a("span",{attrs:{class:"token delimiter variable"}},[t._v("}")])]),t._v('ms"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("println")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"切面完成:"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" any\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("使用 Aspect 配置切面，并通过 component 注解将其交给 spring 处理。然后需要在这个类中定义一个方法，在这个方法上添加一个 Around 注解，它会让在 controller 的处理方法之前和之后来增强。来实现与 filter 和 interceptpr 同样的功能。")]),a("h2",{attrs:{id:"注意"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意","aria-hidden":"true"}},[t._v("#")]),t._v(" 注意")]),a("p",[t._v("这三种方式均可以实现 spring 的请求预处理和后处理，但是他们的功能有差异，初始化方法也有差异。filter 会在启动程序的时候初始化，当请求到来，interceptor 和 aop 会依次初始化，然后 aop 会先结束，然后是 interceptor 接下来是 filter。")]),a("p",[t._v("filter -> interceptor -> aop -> aop -> interceptor -> filter\n当然这三者的所做的功能也不一样。")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("org.apache.catalina.util.ParameterMap@56edbf35\n拦截器 prepare\ncom.pedro.kblog.controller.UserController$$EnhancerBySpringCGLIB$$8060951\ngetInfo\n切面开始:\n1\n切面耗时:12ms\n切面完成:\n拦截器 post\n拦截器耗时:529ms\n拦截器 afterCompletion\n拦截器耗时:530ms\nex is : null\nFilter耗时: 575ms\n")])]),a("p",[t._v("filter 可以在 request 和 response 中得到参数。\ninterceptor 可以得到是哪个类哪个方法调用这个拦截器如有异常可以获得异常。\naop 可以得到请求参数")])])}],!1,null,null,null);s.default=r.exports}}]);