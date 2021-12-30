const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const BFS = (graph, source) => {
  const queue = [source];
  //use array.push and array.shift
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
};

BFS(graph, "a");
