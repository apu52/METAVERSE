# Essential Stuff

## Html import links

Google font

``` html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
  href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@500;700&family=Roboto:wght@400;500;700&display=swap"
  rel="stylesheet">
```

Ionicon

``` html
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
```

---

## Colors

``` css
--safety-orange: hsl(25, 100%, 50%);
--lavender-gray: hsl(230, 19%, 81%);
--persian-rose: hsl(328, 100%, 59%);
--red-crayola: hsl(341, 100%, 49%);
--eerie-black: hsl(240, 6%, 10%);
--light-gray: hsl(0, 0%, 80%);
--cultured-2: hsl(210, 60%, 98%);
--platinum: hsl(0, 0%, 90%);
--gray-web: hsl(220, 5%, 49%);
--cultured: hsl(0, 0%, 93%);
--black_10: hsla(0, 0%, 0%, 0.1);
--black_5: hsla(0, 0%, 0%, 0.05);
--white-1: hsl(0, 0%, 100%);
--white-2: hsl(0, 14%, 98%);
--black: hsl(0, 0%, 0%);
```

## Gradient color

``` css
--gradient: linear-gradient(to left top, var(--persian-rose), var(--safety-orange));
```

## Typography

``` css
--ff-roboto: 'Roboto', sans-serif;
--ff-league-spartan: 'League Spartan', sans-serif;

--fs-1: 3.5rem;
--fs-2: 3rem;
--fs-3: 2.1rem;
--fs-4: 1.7rem;
--fs-5: 1.4rem;
--fs-6: 1.3rem;

--fw-700: 700;
--fw-500: 500;
```

## Spacing

``` css
--section-padding: 60px;
```

## Shadow

``` css
--shadow-1: 0 6px 24px var(--black_5);
--shadow-2: 0 2px 28px var(--black_10);
```

## Border Radius

``` css
--radius-2: 2px;
--radius-5: 5px;
--radius-8: 8px;
```

## Transition

``` css
--transition-1: 0.25s ease;
--transition-2: 0.5s ease;
--cubic-out: cubic-bezier(0.33, 0.85, 0.4, 0.96);
```
