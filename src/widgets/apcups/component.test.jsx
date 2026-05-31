// @vitest-environment jsdom
import { screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderWithProviders } from "test-utils/render-with-providers";
const { useWidgetAPI } = vi.hoisted(() => ({ useWidgetAPI: vi.fn() }));
vi.mock("utils/proxy/use-widget-api", () => ({
  default: useWidgetAPI,
}));
import Component from "./component";
describe("widgets/apcups/component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("renders placeholders while loading", () => {
    useWidgetAPI.mockReturnValue({ data: undefined, error: undefined });
    const { container } = renderWithProviders(<Component service={{ widget: { type: "apcups" } }} />, {
      settings: { hideErrors: false },
    });
    expect(container.querySelectorAll(".service-block")).toHaveLength(27);
    expect(screen.getByText("apcups.status")).toBeInTheDocument();
    expect(screen.getByText("apcups.load")).toBeInTheDocument();
    expect(screen.getByText("apcups.bcharge")).toBeInTheDocument();
    expect(screen.getByText("apcups.timeleft")).toBeInTheDocument();
    expect(screen.getByText("apcups.linev")).toBeInTheDocument();
    expect(screen.getByText("apcups.battv")).toBeInTheDocument();
    expect(screen.getByText("apcups.nominv")).toBeInTheDocument();
    expect(screen.getByText("apcups.nombattv")).toBeInTheDocument();
    expect(screen.getByText("apcups.nompower")).toBeInTheDocument();
    expect(screen.getByText("apcups.sense")).toBeInTheDocument();
    expect(screen.getByText("apcups.lotrans")).toBeInTheDocument();
    expect(screen.getByText("apcups.hitrans")).toBeInTheDocument();
    expect(screen.getByText("apcups.mbattchg")).toBeInTheDocument();
    expect(screen.getByText("apcups.mintimel")).toBeInTheDocument();
    expect(screen.getByText("apcups.maxtime")).toBeInTheDocument();
    expect(screen.getByText("apcups.alarmdel")).toBeInTheDocument();
    expect(screen.getByText("apcups.lastxfer")).toBeInTheDocument();
    expect(screen.getByText("apcups.numxfers")).toBeInTheDocument();
    expect(screen.getByText("apcups.tonbatt")).toBeInTheDocument();
    expect(screen.getByText("apcups.cumonbatt")).toBeInTheDocument();
    expect(screen.getByText("apcups.selftest")).toBeInTheDocument();
    expect(screen.getByText("apcups.battdate")).toBeInTheDocument();
    expect(screen.getByText("apcups.model")).toBeInTheDocument();
    expect(screen.getByText("apcups.upsname")).toBeInTheDocument();
    expect(screen.getByText("apcups.cable")).toBeInTheDocument();
    expect(screen.getByText("apcups.driver")).toBeInTheDocument();
    expect(screen.getByText("apcups.starttime")).toBeInTheDocument();
  });
  it("renders values when loaded", () => {
    useWidgetAPI.mockReturnValue({
      data: {
        status: "ONLINE",
        load: "22.0 Percent",
        bcharge: "100.0 Percent",
        timeleft: "27.3 Minutes",
        linev: "234.0 Volts",
        battv: "27.1 Volts",
        nominv: "230 Volts",
        nombattv: "24.0 Volts",
        nompower: "700 Watts",
        sense: "Medium",
        lotrans: "150.0 Volts",
        hitrans: "280.0 Volts",
        mbattchg: "5 Percent",
        mintimel: "3 Minutes",
        maxtime: "0 Seconds",
        alarmdel: "30 Seconds",
        lastxfer: "Automatic or explicit self test",
        numxfers: "0",
        tonbatt: "0 Seconds",
        cumonbatt: "0 Seconds",
        selftest: "NO",
        battdate: "2026-03-18",
        model: "Test UPS",
        upsname: "apcupsd",
        cable: "USB Cable",
        driver: "USB UPS Driver",
        starttime: "2026-05-30 22:02:13 +0200",
      },
      error: undefined,
    });
    renderWithProviders(<Component service={{ widget: { type: "apcups" } }} />, { settings: { hideErrors: false } });
    expect(screen.getByText("ONLINE")).toBeInTheDocument();
    expect(screen.getByText("22.0 Percent")).toBeInTheDocument();
    expect(screen.getByText("100.0 Percent")).toBeInTheDocument();
    expect(screen.getByText("27.3 Minutes")).toBeInTheDocument();
    expect(screen.getByText("234.0 Volts")).toBeInTheDocument();
    expect(screen.getByText("27.1 Volts")).toBeInTheDocument();
    expect(screen.getByText("Automatic or explicit self test")).toBeInTheDocument();
    expect(screen.getByText("2026-03-18")).toBeInTheDocument();
    expect(screen.getByText("2026-05-30 22:02:13 +0200")).toBeInTheDocument();
  });
});
