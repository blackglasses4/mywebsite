[data-theme="light"],
:root:not([data-theme="dark"]) {
  $theme-dominant-light: hsl(0, 0%, 100%);
  $theme-dominant-dark: hsl(0, 0%, 5%);
  $darkgrey: hsl(0, 0%, 13%);
  $lightgreen: hsl(146, 97%, 23%);
  $darkgreen: hsl(144, 96%, 10%);
}

@media only screen and (prefers-color-scheme: dark) {
   :root:not([data-theme]) {
    $theme-dominant-light: hsl(0, 0%, 5%);
    $theme-dominant-dark: hsl(0, 0%, 100%);
    $darkgrey: hsl(0, 0%, 13%);
    $lightgreen: hsl(146, 97%, 23%);
    $darkgreen: hsl(144, 96%, 10%);
   }
}

[data-theme="dark"] {
  $theme-dominant-light: hsl(0, 0%, 5%);
  $theme-dominant-dark: hsl(0, 0%, 100%);
  $darkgrey: hsl(0, 0%, 13%);
  $lightgreen: hsl(146, 97%, 23%);
  $darkgreen: hsl(144, 96%, 10%);
}
słuchaj sprawa jest, chce żeby np. theme-dominant-light zmieniał kolor tak jak jest wyżej napisane zależne od data-theme: dark itp. Aleeee jestem na sass i on chce, abym podała już poza rootem jakieś dane, color. nie wiem jak z tego wybrnąć.  :root {
  //colors 
  --white: #{$white};
  --darknight: #{$darknight};
  --darkgrey: #{$darkgrey};
  --lightgreen: #{$lightgreen};
  --darkgreen: #{$darkgreen};

  //font-family
  --font: #{$font};
  --font-additional: #{$font-additional};
} $white: hsl(0, 0%, 100%);
$darknight: hsl(0, 0%, 5%);
$darkgrey: hsl(0, 0%, 13%);
$lightgreen: hsl(146, 97%, 23%);
$darkgreen: hsl(144, 96%, 10%);chce on coś takiego, żebym mogła korzystać z tych rzeczy w innych plikach itp co robić. potrzebne mi te rooty