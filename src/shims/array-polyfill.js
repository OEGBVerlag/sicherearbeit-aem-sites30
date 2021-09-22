import arrayFrom from 'array-from'
import findIndex from 'array.prototype.findindex'

findIndex.shim()

if (!Array.from) {
  Array.from = arrayFrom
}
