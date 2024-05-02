import {expect, describe, it} from "vitest";
import {ImportUsers} from "./ImportUsers.js";

class ImportUsersTestable extends ImportUsers {
  public readonly lines: string[] = []

  log(message: string) {
    this.lines.push(message)
  }
}

describe('Import users', function () {
  it('should import users from CSV and URL', async function () {
    const importUsers = new ImportUsersTestable()
    await importUsers.execute()
    expect(importUsers.lines).toMatchSnapshot()
  })
});
