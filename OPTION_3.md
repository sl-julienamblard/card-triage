# Existing personal projects

Her is some links if you want to take a look at more code I've done
Right now I havent any time before wednesday to provide some code env to run these piece of codes, but you still can have a look if you are curious!

## email-misspelled

https://github.com/sl-julienamblard/email-misspelled
a small npm package I share for checking email adress et suggestion correction if it find some misspellings.

## package-proxy

https://github.com/sl-julienamblard/package-proxy
Another npm packages. Unfortunally I havent found time yet to finish the documentation and released it in v1. The idea behind this package is to provide a CLI for proxify internal packages.
for example, instead of doing this kind of imports:

```bash
import { Foo } from "package/lib/path/to/file"
```

I provide a way to to these kind of import

```bash
import { Foo } from "package/Foo"
```

It can help the bundler to find the right module to import (cjs or esm) with his types. And you can get rid of barrel files issues

Once we meet in our interview, I could show you more code, but I can't just share the repos because it's internal company projects

Happy review and thx for your time !

**(ho and as a bonus: [my codepen](https://codepen.io/Capse), it's very old code (like 10yo) so please don't judge me)**
