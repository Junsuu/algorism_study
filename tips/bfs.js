/**
 * 큐 사용
 * 간선의 길이가 동일할때 최단거리 탐색용
 * DFS 타임아웃일 경우 사용
 * 최단경로 알고리즘(다익스트라 - 우선순위큐사용) 와 비슷함 (대신 다익스트라는 간선의 비용이 서로 달라도 OK)
 */

/**
 * BFS 활용하기 위한 Queue
 */
class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }

    dequeue() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex]
        this.headIndex++;
        return item;
    }

    peak() {
        return this.items[this.headIndex];
    }
    getLength(){
        return this.tailIndex - this.headIndex;
    }
}

const queue = new Queue();
queue.enqueue(5);
queue.dequeue();
// 다빼기
while (queue.getLength() != 0) {
    console.log(queue.dequeue);
}



/**
 * BFS 구현
 */
const bfs = (graph, start, visited) => {
    const queue = new Queue();
    queue.enqueue(start);
    // 현재 노드를 방문처리
    visited[start] = true;

    // 큐 다 비울떄까지 루프
    while (queue.getLength() !== 0) {
        //큐에서 원소 하나 뽑기
        const v = queue.dequeue();

        // 아직 미방문 원소들 큐에 삽입
        for (const i of graph[v]) {
            if (!visited[i]) {
                queue.enqueue(i);
                visited[i] = true;
            }
        }
    }
}

const graph = [
    [],
    [2, 3, 4],
    [1],
    [1, 5, 6],
    [1, 7],
    [3, 8],
    [3],
    [4],
    [5]
]

// 방문정보 기록용 배열
const visited = Array(9).fill(false);

//dfs 호출 1번 노드부터
bfs(graph, 1, visited)