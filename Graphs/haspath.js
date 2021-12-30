const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

// const source = "f";
// const destination = "k";

// const source = "k";
// const destination = "f";


// n --> Nodes and e--> Edges

// Time O(e)
// Space O(n)
// In worst case e is n(n+1)/2

const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) return true;
  }
  return false;
};

const hasPathBFS = (graph, src, dst) => {
  const queue = [src];
  while (queue.length > 0) {
    const current = queue.shift();

    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neghbor);
    }
  }
  return false;
};

console.log(hasPath(graph, source, destination));