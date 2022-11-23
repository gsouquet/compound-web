/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CpdAvatar {
        /**
          * The avatar's height in pixels
         */
        "height": number;
        /**
          * The avatar's source
         */
        "src": string;
        /**
          * The avatar's width in pixels
         */
        "width": number;
    }
}
declare global {
    interface HTMLCpdAvatarElement extends Components.CpdAvatar, HTMLStencilElement {
    }
    var HTMLCpdAvatarElement: {
        prototype: HTMLCpdAvatarElement;
        new (): HTMLCpdAvatarElement;
    };
    interface HTMLElementTagNameMap {
        "cpd-avatar": HTMLCpdAvatarElement;
    }
}
declare namespace LocalJSX {
    interface CpdAvatar {
        /**
          * The avatar's height in pixels
         */
        "height"?: number;
        /**
          * The avatar's source
         */
        "src"?: string;
        /**
          * The avatar's width in pixels
         */
        "width"?: number;
    }
    interface IntrinsicElements {
        "cpd-avatar": CpdAvatar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cpd-avatar": LocalJSX.CpdAvatar & JSXBase.HTMLAttributes<HTMLCpdAvatarElement>;
        }
    }
}
