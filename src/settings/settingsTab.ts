import { App, PluginSettingTab, Setting } from "obsidian";
import type GeoGebraLabPlugin from "../main";
import {
  GEO_GEBRA_APP_NAMES,
  GeoGebraAlgebraInputPosition,
  GeoGebraAppName,
  GeoGebraDetachKeyboardMode,
  GeoGebraKeyboardFocusMode,
  GeoGebraKeyboardType
} from "../parser/types";
import { sanitizeHttpUrl, sanitizeScriptUrl } from "../utils/sanitize";
import { CURATED_LANGUAGES, normalizeLanguageCode } from "./languages";
import {
  ALGEBRA_INPUT_POSITION_OPTIONS,
  APP_NAME_OPTIONS,
  DEFAULT_SETTINGS,
  KEYBOARD_TYPE_OPTIONS,
  RENDER_MODE_OPTIONS
} from "./settings";

export class GeoGebraLabSettingTab extends PluginSettingTab {
  plugin: GeoGebraLabPlugin;

  constructor(app: App, plugin: GeoGebraLabPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    new Setting(containerEl).setName("GeoGebra Lab Settings").setHeading();

    // -------------------------------------------------------------
    // Section 1: Rendering & Engine
    // -------------------------------------------------------------
    new Setting(containerEl)
      .setName("Rendering & Engine (موتور اجرا و رندرینگ)")
      .setHeading();

    new Setting(containerEl)
      .setName("Render mode")
      .setDesc("Use Local viewer server or External viewer when Obsidian CSP blocks GeoGebra CSS.")
      .addDropdown((dropdown) => {
        dropdown.addOption("srcdoc", RENDER_MODE_OPTIONS.srcdoc);
        dropdown.addOption("localServer", RENDER_MODE_OPTIONS.localServer);
        dropdown.addOption("externalViewer", RENDER_MODE_OPTIONS.externalViewer);
        dropdown.setValue(this.plugin.settings.renderMode);
        dropdown.onChange(async (value) => {
          if (value === "externalViewer" || value === "localServer" || value === "srcdoc") {
            this.plugin.settings.renderMode = value;
          }
          await this.plugin.saveSettings();
          this.display();
        });
      });

    new Setting(containerEl)
      .setName("GeoGebra script URL")
      .setDesc("The online deployggb.js URL used by srcdoc mode and passed to the external viewer.")
      .addText((text) => {
        text.inputEl.setCssStyles({ width: "100%" });
        text.setValue(this.plugin.settings.geogebraScriptUrl);
        text.onChange(async (value) => {
          this.plugin.settings.geogebraScriptUrl = sanitizeScriptUrl(value);
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("External viewer URL")
      .setDesc("HTTPS page that hosts viewer/index.html. Required only for External viewer mode.")
      .addText((text) => {
        text.inputEl.setCssStyles({ width: "100%" });
        text.setPlaceholder("https://your-domain.example/geogebra-lab-viewer/");
        text.setValue(this.plugin.settings.viewerUrl);
        text.onChange(async (value) => {
          this.plugin.settings.viewerUrl = value.trim()
            ? sanitizeHttpUrl(value, this.plugin.settings.viewerUrl)
            : "";
          await this.plugin.saveSettings();
        });
      });

    // -------------------------------------------------------------
    // Section 2: App & View Defaults
    // -------------------------------------------------------------
    new Setting(containerEl)
      .setName("App & View Defaults (برنامه و نمای پیش‌فرض)")
      .setHeading();

    new Setting(containerEl)
      .setName("Default app")
      .setDesc("Default GeoGebra sub-application used when a block omits appName.")
      .addDropdown((dropdown) => {
        GEO_GEBRA_APP_NAMES.forEach((appName) => {
          dropdown.addOption(appName, APP_NAME_OPTIONS[appName]);
        });
        dropdown.setValue(this.plugin.settings.defaultAppName);
        dropdown.onChange(async (value) => {
          this.plugin.settings.defaultAppName = value as GeoGebraAppName;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Default perspective")
      .setDesc("Perspective shorthand (e.g. 'G' for Graphic, 'AG' for Algebra & Graphic, '1' to '6').")
      .addText((text) => {
        text.setPlaceholder("e.g. AG or G");
        text.setValue(this.plugin.settings.defaultPerspective);
        text.onChange(async (value) => {
          this.plugin.settings.defaultPerspective = value.trim();
          await this.plugin.saveSettings();
        });
      });

    // -------------------------------------------------------------
    // Section 3: Language & Localization
    // -------------------------------------------------------------
    new Setting(containerEl)
      .setName("Language & Localization (زبان و بومی‌سازی)")
      .setHeading();

    new Setting(containerEl)
      .setName("Default UI language")
      .setDesc("Select from curated languages including Persian (fa) and English (en), or system default.")
      .addDropdown((dropdown) => {
        CURATED_LANGUAGES.forEach((lang) => {
          dropdown.addOption(lang.code, lang.label);
        });
        const currentLang = normalizeLanguageCode(this.plugin.settings.defaultLanguage);
        const hasOption = CURATED_LANGUAGES.some((l) => l.code === currentLang);
        if (!hasOption && currentLang) {
          dropdown.addOption(currentLang, `Custom (${currentLang})`);
        }
        dropdown.setValue(currentLang);
        dropdown.onChange(async (value) => {
          this.plugin.settings.defaultLanguage = value;
          await this.plugin.saveSettings();
          this.display();
        });
      });

    new Setting(containerEl)
      .setName("Custom language code override")
      .setDesc("Or enter any specific ISO 639-1 code (e.g., 'fa', 'en', 'de', 'fr'). Leave blank to use dropdown.")
      .addText((text) => {
        text.setPlaceholder("e.g. fa or en");
        text.setValue(this.plugin.settings.defaultLanguage);
        text.onChange(async (value) => {
          this.plugin.settings.defaultLanguage = normalizeLanguageCode(value);
          await this.plugin.saveSettings();
          this.display();
        });
      });

    new Setting(containerEl)
      .setName("Default country")
      .setDesc("Two-letter ISO 3166-1 country code (e.g., 'IR', 'US', 'DE').")
      .addText((text) => {
        text.setPlaceholder("e.g. IR or US");
        text.setValue(this.plugin.settings.defaultCountry);
        text.onChange(async (value) => {
          this.plugin.settings.defaultCountry = value.trim();
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Default loading text")
      .setDesc("Placeholder text displayed inside the frame while GeoGebra initializes.")
      .addText((text) => {
        text.setPlaceholder("Loading GeoGebra...");
        text.setValue(this.plugin.settings.defaultLoadingText);
        text.onChange(async (value) => {
          this.plugin.settings.defaultLoadingText = value.trim() || DEFAULT_SETTINGS.defaultLoadingText;
          await this.plugin.saveSettings();
        });
      });

    // -------------------------------------------------------------
    // Section 4: Sizing & Appearance
    // -------------------------------------------------------------
    new Setting(containerEl)
      .setName("Dimensions & Appearance (ابعاد، مقیاس و ظاهر)")
      .setHeading();

    new Setting(containerEl)
      .setName("Default width")
      .setDesc("Width in pixels when omitted in block.")
      .addText((text) => {
        text.setPlaceholder(String(DEFAULT_SETTINGS.defaultWidth));
        text.setValue(String(this.plugin.settings.defaultWidth));
        text.onChange(async (value) => {
          const width = Number(value);
          if (Number.isFinite(width) && width > 0) {
            this.plugin.settings.defaultWidth = Math.round(width);
            await this.plugin.saveSettings();
          }
        });
      });

    new Setting(containerEl)
      .setName("Default height")
      .setDesc("Height in pixels when omitted in block.")
      .addText((text) => {
        text.setPlaceholder(String(DEFAULT_SETTINGS.defaultHeight));
        text.setValue(String(this.plugin.settings.defaultHeight));
        text.onChange(async (value) => {
          const height = Number(value);
          if (Number.isFinite(height) && height > 0) {
            this.plugin.settings.defaultHeight = Math.round(height);
            await this.plugin.saveSettings();
          }
        });
      });

    new Setting(containerEl)
      .setName("Default scale factor")
      .setDesc("Scale factor for the applet (0.1 to 10.0, default 1.0).")
      .addText((text) => {
        text.setPlaceholder("1");
        text.setValue(String(this.plugin.settings.defaultScale));
        text.onChange(async (value) => {
          const scale = Number(value);
          if (Number.isFinite(scale) && scale >= 0.1 && scale <= 10) {
            this.plugin.settings.defaultScale = scale;
            await this.plugin.saveSettings();
          }
        });
      });

    new Setting(containerEl)
      .setName("Auto height")
      .setDesc("Automatically adjust container height to fit content.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultAutoHeight);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultAutoHeight = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Allow upscale")
      .setDesc("Allow the applet to scale up beyond its original dimensions.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultAllowUpscale);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultAllowUpscale = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Border color")
      .setDesc("Hex color code or CSS color string for container border (e.g. '#cccccc').")
      .addText((text) => {
        text.setPlaceholder("e.g. #cccccc or transparent");
        text.setValue(this.plugin.settings.defaultBorderColor);
        text.onChange(async (value) => {
          this.plugin.settings.defaultBorderColor = value.trim();
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Border radius")
      .setDesc("Border radius in pixels for container edges.")
      .addText((text) => {
        text.setPlaceholder("0");
        text.setValue(String(this.plugin.settings.defaultBorderRadius));
        text.onChange(async (value) => {
          const radius = Number(value);
          if (Number.isFinite(radius) && radius >= 0) {
            this.plugin.settings.defaultBorderRadius = radius;
            await this.plugin.saveSettings();
          }
        });
      });

    new Setting(containerEl)
      .setName("Transparent graphics view")
      .setDesc("Make the GeoGebra graphics view background transparent by default.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultTransparentGraphics);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultTransparentGraphics = value;
          await this.plugin.saveSettings();
        });
      });

    // -------------------------------------------------------------
    // Section 5: Toolbars & Menus
    // -------------------------------------------------------------
    new Setting(containerEl)
      .setName("Toolbars & Menus (نوار ابزار، منوها و ورودی جبر)")
      .setHeading();

    new Setting(containerEl)
      .setName("Show toolbar by default")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultShowToolBar);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultShowToolBar = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Show toolbar help by default")
      .setDesc("Show contextual help for tools selected in the toolbar.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultShowToolBarHelp);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultShowToolBarHelp = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Custom toolbar definition")
      .setDesc("Custom toolbar definition string specifying available tools (e.g. '0 | 1 2 3').")
      .addText((text) => {
        text.inputEl.setCssStyles({ width: "100%" });
        text.setPlaceholder("e.g. 0 | 1 2 3");
        text.setValue(this.plugin.settings.defaultCustomToolBar);
        text.onChange(async (value) => {
          this.plugin.settings.defaultCustomToolBar = value.trim();
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Show algebra input by default")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultShowAlgebraInput);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultShowAlgebraInput = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Algebra input position")
      .setDesc("Position of the algebra input field.")
      .addDropdown((dropdown) => {
        dropdown.addOption("algebra", ALGEBRA_INPUT_POSITION_OPTIONS.algebra);
        dropdown.addOption("top", ALGEBRA_INPUT_POSITION_OPTIONS.top);
        dropdown.addOption("bottom", ALGEBRA_INPUT_POSITION_OPTIONS.bottom);
        dropdown.setValue(this.plugin.settings.defaultAlgebraInputPosition);
        dropdown.onChange(async (value) => {
          this.plugin.settings.defaultAlgebraInputPosition = value as GeoGebraAlgebraInputPosition;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Show menu bar by default")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultShowMenuBar);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultShowMenuBar = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Allow style bar")
      .setDesc("Show style bar for quick formatting of selected objects.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultAllowStyleBar);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultAllowStyleBar = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Enable undo / redo")
      .setDesc("Enable undo and redo history buttons.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultEnableUndoRedo);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultEnableUndoRedo = value;
          await this.plugin.saveSettings();
        });
      });

    // -------------------------------------------------------------
    // Section 6: View Controls & Buttons
    // -------------------------------------------------------------
    new Setting(containerEl)
      .setName("Buttons & View Controls (دکمه‌ها و کنترل‌های تعاملی)")
      .setHeading();

    new Setting(containerEl)
      .setName("Show zoom buttons")
      .setDesc("Display zoom in / zoom out buttons in the graphics view.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultShowZoomButtons);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultShowZoomButtons = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Show fullscreen button")
      .setDesc("Display fullscreen toggle button.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultShowFullscreenButton);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultShowFullscreenButton = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Show animation button")
      .setDesc("Display start/pause animation button when animated sliders exist.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultShowAnimationButton);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultShowAnimationButton = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Show reset icon")
      .setDesc("Display reset icon in upper right corner to revert to initial state.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultShowResetIcon);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultShowResetIcon = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Show suggestion buttons")
      .setDesc("Display auto-completion / command suggestion pills in algebra input.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultShowSuggestionButtons);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultShowSuggestionButtons = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Show play button")
      .setDesc("Overlay a large play button on initial load before activating construction.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultPlayButton);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultPlayButton = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Button border color")
      .setDesc("Custom border color for buttons.")
      .addText((text) => {
        text.setPlaceholder("e.g. #333333");
        text.setValue(this.plugin.settings.defaultButtonBorderColor);
        text.onChange(async (value) => {
          this.plugin.settings.defaultButtonBorderColor = value.trim();
          await this.plugin.saveSettings();
        });
      });

    // -------------------------------------------------------------
    // Section 7: Interactivity & Permissions
    // -------------------------------------------------------------
    new Setting(containerEl)
      .setName("Interactivity & Permissions (تعامل، ماوس و امنیت)")
      .setHeading();

    new Setting(containerEl)
      .setName("Enable right-click")
      .setDesc("Allow context menus and object properties via right-click.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultEnableRightClick);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultEnableRightClick = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Enable label drags")
      .setDesc("Allow dragging object name labels around the canvas.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultEnableLabelDrags);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultEnableLabelDrags = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Enable shift-drag zoom")
      .setDesc("Allow shifting axes and zooming using Shift + mouse drag.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultEnableShiftDragZoom);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultEnableShiftDragZoom = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Point capturing threshold")
      .setDesc("Grid snapping sensitivity distance (0 to 100). Default is 3.")
      .addText((text) => {
        text.setPlaceholder("3");
        text.setValue(String(this.plugin.settings.defaultCapturingThreshold));
        text.onChange(async (value) => {
          const threshold = Number(value);
          if (Number.isFinite(threshold) && threshold >= 0 && threshold <= 100) {
            this.plugin.settings.defaultCapturingThreshold = threshold;
            await this.plugin.saveSettings();
          }
        });
      });

    new Setting(containerEl)
      .setName("Prevent focus")
      .setDesc("Prevent the applet from stealing keyboard focus on page load.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultPreventFocus);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultPreventFocus = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Enable file features")
      .setDesc("Allow open/save/export file operations inside the applet.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultEnableFileFeatures);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultEnableFileFeatures = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Disable JavaScript")
      .setDesc("Disable embedded JavaScript execution inside GeoGebra files for extra security.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultDisableJavaScript);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultDisableJavaScript = value;
          await this.plugin.saveSettings();
        });
      });

    // -------------------------------------------------------------
    // Section 8: Advanced Math Engines & Virtual Keyboard
    // -------------------------------------------------------------
    new Setting(containerEl)
      .setName("Advanced Math & Virtual Keyboard (موتورهای محاسباتی و کیبورد)")
      .setHeading();

    new Setting(containerEl)
      .setName("Enable 3D engine")
      .setDesc("Enable WebGL 3D math engine support.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultEnable3d);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultEnable3d = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Enable CAS engine")
      .setDesc("Enable Computer Algebra System (CAS) symbolic computing engine.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultEnableCAS);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultEnableCAS = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Show virtual keyboard on focus")
      .setDesc("Control on-screen math keyboard behavior when input gains focus.")
      .addDropdown((dropdown) => {
        dropdown.addOption("auto", "Auto (خودکار بر اساس لمسی یا دسکتاپ)");
        dropdown.addOption("true", "Always show (همواره باز شود)");
        dropdown.addOption("false", "Never show (هرگز باز نشود)");
        dropdown.setValue(String(this.plugin.settings.defaultShowKeyboardOnFocus));
        dropdown.onChange(async (value) => {
          this.plugin.settings.defaultShowKeyboardOnFocus =
            value === "true" ? true : value === "false" ? false : "auto";
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Virtual keyboard type")
      .setDesc("Layout of the on-screen keyboard.")
      .addDropdown((dropdown) => {
        dropdown.addOption("normal", KEYBOARD_TYPE_OPTIONS.normal);
        dropdown.addOption("scientific", KEYBOARD_TYPE_OPTIONS.scientific);
        dropdown.addOption("notes", KEYBOARD_TYPE_OPTIONS.notes);
        dropdown.setValue(this.plugin.settings.defaultKeyboardType);
        dropdown.onChange(async (value) => {
          this.plugin.settings.defaultKeyboardType = value as GeoGebraKeyboardType;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Detach virtual keyboard")
      .setDesc("Render keyboard in a detached DOM element.")
      .addDropdown((dropdown) => {
        dropdown.addOption("auto", "Auto");
        dropdown.addOption("true", "Detached (true)");
        dropdown.addOption("false", "Embedded (false)");
        dropdown.setValue(String(this.plugin.settings.defaultDetachKeyboard));
        dropdown.onChange(async (value) => {
          this.plugin.settings.defaultDetachKeyboard =
            value === "true" ? true : value === "false" ? false : "auto";
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Number rounding format")
      .setDesc("Rounding specification (e.g. '2' for 2 decimals, '3s' for 3 significant figures).")
      .addText((text) => {
        text.setPlaceholder("e.g. 2 or 3s");
        text.setValue(this.plugin.settings.defaultRounding);
        text.onChange(async (value) => {
          this.plugin.settings.defaultRounding = value.trim();
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Active error dialogs")
      .setDesc("Show modal error dialogs when GeoGebra encounters a calculation error.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultErrorDialogsActive);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultErrorDialogsActive = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Show logging")
      .setDesc("Output GeoGebra debug logs to the browser console.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.defaultShowLogging);
        toggle.onChange(async (value) => {
          this.plugin.settings.defaultShowLogging = value;
          await this.plugin.saveSettings();
        });
      });

    // -------------------------------------------------------------
    // Section 9: Presentation in Notes
    // -------------------------------------------------------------
    new Setting(containerEl)
      .setName("Presentation in Notes (ارائه در یادداشت‌ها)")
      .setHeading();

    new Setting(containerEl)
      .setName("Enable captions")
      .setDesc("Render captions below the GeoGebra applet when specified in the block.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.enableCaption);
        toggle.onChange(async (value) => {
          this.plugin.settings.enableCaption = value;
          await this.plugin.saveSettings();
        });
      });

    new Setting(containerEl)
      .setName("Enable explanations")
      .setDesc("Render explanation bullet lists below the applet when specified in the block.")
      .addToggle((toggle) => {
        toggle.setValue(this.plugin.settings.enableExplain);
        toggle.onChange(async (value) => {
          this.plugin.settings.enableExplain = value;
          await this.plugin.saveSettings();
        });
      });
  }
}
