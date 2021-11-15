import { convertDate, getAverageTemp, getMedianTemp } from "../utils";

describe("utils", () => {
  describe("getAverageTemp", () => {
    test("returns the correct average temp for different numbers of items", () => {
      expect(getAverageTemp(2, 4)).toBe("3.00°");
      expect(getAverageTemp(6, 1, 3, 2)).toBe("3.00°");
      expect(getAverageTemp(0, -1, 20, 3)).toBe("5.50°");
    });
  });

  describe("convertDate", () => {
    beforeAll(() => {
      jest
        .spyOn(Date.prototype, "toLocaleDateString")
        .mockReturnValue("mocked date");
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });

    test("convert timestamp in sec to local data string", () => {
      expect(convertDate(1636926632)).toBe("mocked date");
      expect(Date.prototype.toLocaleDateString).toHaveBeenCalledWith("se-SE", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    });
  });

  describe("getMedianTemp", () => {
    test("when list total items is odd pick the list middle number", () => {
      expect(getMedianTemp(1, 2, 3, 4, 5)).toBe(`3.00°`);
    });

    test("when list total items is even pick the average of the 2 middle numbers", () => {
      expect(getMedianTemp(1, 2, 3, 4, 5, 6)).toBe(`3.50°`);
    });
  });
});
