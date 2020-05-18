import { FBOSystem } from './fbo/FBOSystem';
import { IBaseCamera } from '../../camera/IBaseCamera';
import { IRenderer } from '../IRenderer';
import { IShader } from './shaders/IShader';
import { ShaderSystem } from './shaders/ShaderSystem';
import { SingleTextureQuadShader } from './shaders/SingleTextureQuadShader';
import { TextureSystem } from './textures/TextureSystem';

export interface IWebGLRenderer extends IRenderer
{
    gl: WebGLRenderingContext;

    fbo: FBOSystem;
    textures: TextureSystem;
    shaders: ShaderSystem;

    // singleQuadShader: SingleTextureQuadShader;
    // currentShader: IShader;
    // shaders: IShader[];

    projectionMatrix: Float32Array;
    flushTotal: number;
    contextLost: boolean;
    currentCamera: IBaseCamera;

    onContextLost (event: Event): void;
    onContextRestored (): void;
    reset (framebuffer?: WebGLFramebuffer, width?: number, height?: number): void;
    // setShader (newShader: IShader, textureID?: number): IShader;
    // popShader (): void;
    // resetShader (): void;
    flush (): void;
}
