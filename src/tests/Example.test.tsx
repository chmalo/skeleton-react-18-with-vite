import { describe, test, expect } from "vitest"

describe("example testing", () => {
  /**
   * @vitest-environment jsdom
   */

  test("use jsdom in this test file", () => {
    const element = document.createElement("div")
    expect(element).not.toBeNull()
  })
})
