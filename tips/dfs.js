/**
 * dfs 
 * 재귀함수 / 스택사용해서 구현
 * 2차원 배열로 그래프 표현 (인접리스트 방식)
 * 완전 탐색할 경우 BFS보다 느림 대신 DFS 구현이 쉬워서 걍 DFS 쓰기도함
 * 예제 (트리 순회, 점화식 구현, 트리에서 최단거리 구하기)
 * 인접리스트에서 0번노드 빈배열로 처리하면 좀 쉬움
 */

const dfs = (graph, v, visited) => {
    // 현재 노드 방문처리
    visited[v] = true;

    // 해당 인접정보 배열 순회
    for (const i of graph[v]) {
        // 방문한적없으면 재귀
        if (!visited[i]) {
            dfs(graph, i, visited)
        }
    }
}

// 각 노드가 연결된 정보를 인접리스트 방식으로 표현
// 0번 노드를 없애서 인덱스와 노드 위치를 일치시키면 편함
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
dfs(graph, 1, visited)