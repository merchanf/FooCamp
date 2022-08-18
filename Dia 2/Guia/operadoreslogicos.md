# <FooCamp / >

## operadores logicos

**p** = vale menos de $1000
**q** = Esta fresco

``` javascript
if( vale menos de $1000 y esta fresco ){
  console.log('lo compramos');
}else{
  console.log('No lo compramos');
}
```

`Y` = `AND` = `&&`
| p | q | p y q |
| - | - | ----- |
| v  | v  | v |
| v  | f  | f |
| f  | v  | f |
| f  | f  | f |

* si una de las declaraciones es falso, todo es falso

`O` = `OR` = `||`
| p | q | p y q |
| - | - | ----- |
| v  | v  | v |
| v  | f  | v |
| f  | v  | v |
| f  | f  | f |

* si una de las declaraciones es verdadera, todo es verdadero.

`NO` = `NOT` = `!`
| p | !p | 
| - | - | 
| v  | f  |
| f  | v  |

`XOR` = `O exclusiva` = `exclusive or`

`XOR = p && !q || !p && q`
| p | q | `p && !q || !p && q` |
| - | - | ----- |
| v  | v  |  |
| v  | f  |  |
| f  | v  |  |
| f  | f  |  |
