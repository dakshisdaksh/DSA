const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const depthFirstPrint = (graph, source) => {
  const stack = [source];
  //use only push and pop (it is a stack)
  while (stack.length > 0) {
    const current = stack.pop();
    console.log(current);
    graph[current];
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }
};

const DFPRecursion = (graph, source) => { //no base case (in leaf case, we iterate thru empty array)
  console.log(source);
  for (let neighbour of graph[source]) {
    DFPRecursion(graph, neighbour);
  }
};

// depthFirstPrint(graph, 'a');
DFPRecursion(graph, "a");
