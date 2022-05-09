/**
 * The`Awaited`Type and`Promise`Improvements
 */

function fn(): Promise<Promise<string>> {
    // 
}

type p = Awaited<ReturnType<typeof fn>>