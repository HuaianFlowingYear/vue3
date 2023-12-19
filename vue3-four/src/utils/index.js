export const list = [{
        id: 1,
        pid: 0,
        path: "/a",
        name: "a",
        component: "a.vue",
    },
    {
        id: 2,
        pid: 0,
        path: "/b",
        name: "b",
        component: "b.vue",
    },
    {
        id: 3,
        pid: 1,
        path: "a1",
        name: "a1",
        component: "a1.vue",
    },
    {
        id: 4,
        pid: 1,
        path: "a2",
        name: "a2",
        component: "a2.vue",
    },
    {
        id: 5,
        pid: 2,
        path: "/",
        name: "b1",
        component: "b1.vue",
    },
    {
        id: 6,
        pid: 2,
        path: "b2",
        name: "b2",
        component: "b2.vue",
    },
];


export default function toThree(list, pid = 0) {
    let result = []
    for (let i = 0; i < list.length; i++) {

        if (list[i].pid == pid) {
            const component = list[i].component
            result.push({
                ...list[i],
                component: import (`@/views/${component}`),
                children: toThree(list, list[i].id),
            })
        }
    }
    return result
}