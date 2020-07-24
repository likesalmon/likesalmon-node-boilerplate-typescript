/**
 *
 *
 * Tests for index
 *
 *
 */
import main from "./index";

describe("main", () => {
  it("should not error", async () => {
    const spy = jest.spyOn(global.console, "error");
    main();
    expect(spy).not.toHaveBeenCalled();
  });
});
