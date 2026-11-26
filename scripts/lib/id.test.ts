import assert from "node:assert/strict";
import { test } from "node:test";
import { deriveId } from "./id.ts";

test("derives listing ids from npm names", () => {
  assert.equal(deriveId("@acme/zentic-dracula"), "dracula");
  assert.equal(deriveId("zentic-defer"), "defer");
  assert.equal(deriveId("@acme/zentic-base2tone-theme"), "base2tone-theme");
  assert.equal(deriveId("@acme/zentic-plugin"), "acme");
  assert.equal(deriveId("@acme/review-zentic-plugin"), "review");
  assert.equal(deriveId("zentic"), "zentic");
});

test("strips the upstream paseo prefix from existing packages", () => {
  assert.equal(deriveId("@omercnet/paseo-dracula"), "dracula");
  assert.equal(deriveId("paseo-defer"), "defer");
  assert.equal(deriveId("@sayrio/paseo-plugin"), "sayrio");
  assert.equal(deriveId("@acme/review-paseo-plugin"), "review");
  assert.equal(deriveId("paseo"), "paseo");
});
