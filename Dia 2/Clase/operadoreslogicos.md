# <FooCamp / >

## operadores logicos

**p** vale menos de $1000
**q** estar fresco

``` javascript
if( p && q ){
  console.log('lo compramos');
}else{
  console.log('no lo compramos');
}
```

`Y` === `AND` === &&
| p | q | p y q |
| - | - | ----- |
| v | v | v |
| v | f | f |
| f | v | f |
| f | f | f |

* si uno de los valores es falso, toda la declaracion es falsa.

`O` === `OR` === ||
| p | q | p o q |
| - | - | ----- |
| v | v | v |
| v | f | v |
| f | v | v |
| f | f | f |

* si una de los valores es verdadero, la declaracion es verdadera.

`NO` === `NOT` === !
| q | !q | 
| - | - |
| v | f |
| f | v |


`XOR` = `O exclusiva` = `exclusive or`

`XOR = p && !q || !p && q`
| p | q | `(p && !q) || (!p && q)` |
| - | - | ----- |
| v | v | f |
| v | f |  |
| f | v |  |
| f | f |  |
