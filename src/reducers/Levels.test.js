import { mineLocationsFor } from "./Levels";

describe("mineLocationsFor", () => {
  describe("when BEGINNER", () => {
    it("returns correct boardsize", () => {
      expect(mineLocationsFor("BEGINNER")).toHaveLength(10);
    });
  });
  describe("when INTERMEDIATE", () => {
    it("returns correct boardsize", () => {
      expect(mineLocationsFor("INTERMEDIATE")).toHaveLength(40);
    });
  });

  describe("when EXPERT", () => {
    it("returns correct boardsize", () => {
      expect(mineLocationsFor("EXPERT")).toHaveLength(99);
    });
  });
});
