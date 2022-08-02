import test from "node:test";
import { promisify } from "node:util";
import assert from "node:assert";
import { once } from "node:events";

test("Heroes Integration Test", async (t) => {

    const testPort = 9000

    process.env.PORT = testPort

    const { server } = await import('../../src/index.js')

    const testServerAdress = `http://localhost:${testPort}/heroes`

    await t.test("It should be able to create heroes", async (t) => {

        const data = {
            name: "Superman",
            age: 22,
            power: "strenght"
        }

        const request = await fetch(testServerAdress, {
            method: 'POST',
            body: JSON.stringify(data)
        })

        const result = await request.json()

        assert.deepStrictEqual(
            request.headers.get('content-type'),
            'application/json'
        )

        assert.strictEqual(
            request.status, 201
        )

        assert.deepStrictEqual(
            result.name,
            'Superman',
            "Name must be equal to the specified name"
        )

        assert.ok(
            result.id.length > 30,
            "Id should be a valid uuid"
        )

    });
    
    await promisify(server.close.bind(server))()

})

