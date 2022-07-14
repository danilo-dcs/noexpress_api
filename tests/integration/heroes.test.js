import test from "node:test";
import { promisify } from "node:util";
import assert from "node:assert";

test("Heroes Integration Test", async (t) => {

    const testPort = 9000

    process.env.PORT = testPort

    const { server } = await import('../../src/index.js')

    const testServerAdress = `http://localhost:${testPort}/heroes`

    await t.test("It should be able to create heroes", async (t) => {

        const data = {
            id: 1,
            name: "Superman",
            age: 22,
            power: "strenght"
        }

        const request = await fetch(testServerAdress, {
            method: 'POST',
            body: JSON.stringify(data)
        })

        assert.deepStrictEqual(
            request.headers.get('content-type'),
            'application/json'
        )

        assert.strictEqual(
            request.status, 201
        )

        const result = await request.json()

        assert.deepStrictEqual(
            result.message, 'success!'
        )

        assert.ok(
            result.id.legth > 30
        )

    });
    
    await promisify(server.close.bind(server))()

})

