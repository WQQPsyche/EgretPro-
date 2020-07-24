import { component, Entity } from "@egret/ecs";
import { Behaviour, EngineFactory, Transform, Application } from "@egret/engine";
import { MeshFilter, DefaultMeshes, MeshRenderer, DefaultMaterials, Mesh, MeshCreater } from "@egret/render";
import { InputManager, InputCode } from "@egret/input";
import { Rotater } from "./Rotater";

@component()
class ChangeMesh extends Behaviour{
    private _inutmanager:InputManager;
    private _entity:Entity;
    
    onAwake(){
        Application.instance.egretProUtil.addEventListener("changeMesh",1,this.onChangeMesh,this);
        Application.instance.egretProUtil.addEventListener("changeMaterial",1,this.onChangeMaterial,this);
    }
    
    onStart(){
        //创建一个立方体
        const entity:Entity = EngineFactory.createGameEntity3D("model");
        entity.addComponent(MeshFilter).mesh = DefaultMeshes.CUBE;
        entity.addComponent(MeshRenderer).material = DefaultMaterials.MESH_BASIC;
        entity.getComponent(Transform).setLocalPosition(0,2,0);
        entity.addComponent(Rotater);
        this._entity = entity;

    
        //点击左键 切换mesh
        this._inutmanager = Application.instance.globalEntity.getComponent(InputManager)

    }
    private _index = 0;
    private _index2 = 0;
    private _msg:string;
    onUpdate(){
        
/* 
        if (this._inutmanager.getInput(InputCode.LeftMouse).isUp) {
            this._index++;
            if (this._index%4 == 0) {
                
            }
            switch (this._index % 4 ) {
                case 0:
                    this._entity.getComponent(MeshFilter).mesh = DefaultMeshes.CUBE; 
                    break;
                case 1:
                    this._entity.getComponent(MeshFilter).mesh = DefaultMeshes.SPHERE; 
                    break;
                case 2:
                    this._entity.getComponent(MeshFilter).mesh = DefaultMeshes.PYRAMID; 
                    break;
                case 3:
                    this._entity.getComponent(MeshFilter).mesh = DefaultMeshes.CYLINDER;
                    break;
                default:
                    break;
            }
        } */


        if (this._inutmanager.getInput(InputCode.LeftMouse).isUp) {
            this._index++;
            if (this._index%4 == 0) {
                
            }
            switch (this._index % 4 ) {
                case 0:
                    this._entity.getComponent(MeshRenderer).material = DefaultMaterials.MESH_BASIC; 
                    break;
                case 1:
                    this._entity.getComponent(MeshRenderer).material = DefaultMaterials.MESH_NORMAL; 
                    break;
                case 2:
                    this._entity.getComponent(MeshRenderer).material = DefaultMaterials.MESH_LAMBERT; 
                    break;
                case 3:
                    this._entity.getComponent(MeshRenderer).material = DefaultMaterials.MESH_PHONG;
                    break;
                case 4:
                    this._entity.getComponent(MeshRenderer).material = DefaultMaterials.MESH_STANDARD;
                    break;
                case 5:
                    this._entity.getComponent(MeshRenderer).material = DefaultMaterials.MESH_PHYSICAL;
                default:
                    break;
            }
        }
    }

    private onChangeMesh(){
        console.log("changemesh");
            this._index++;
            if (this._index%4 == 0) {
                
            }
            switch (this._index % 4 ) {
                case 0:
                    this._entity.getComponent(MeshFilter).mesh = DefaultMeshes.CUBE; 
                    this._msg = "立方体";
                    break;
                case 1:
                    this._entity.getComponent(MeshFilter).mesh = DefaultMeshes.SPHERE;
                    this._msg = "球体"; 
                    break;
                case 2:
                    this._entity.getComponent(MeshFilter).mesh = DefaultMeshes.PYRAMID;
                    this._msg = "椎体"; 
                    break;
                case 3:
                    this._entity.getComponent(MeshFilter).mesh = DefaultMeshes.CYLINDER;
                    this._msg = "圆柱体";
                    break;
                default:
                    break;
            }
            
            Application.instance.egretProUtil.dispatch("updateText",1,this._msg)
    }

    private onChangeMaterial(){
        console.log("changematerial");
            this._index2++;
            switch (this._index2 % 7 ) {
                case 0:
                    this._entity.getComponent(MeshRenderer).material = DefaultMaterials.MESH_BASIC;
                    this._msg = "MESH_BASIC"; 
                    break;
                case 1:
                    this._entity.getComponent(MeshRenderer).material = DefaultMaterials.MESH_NORMAL;
                    this._msg = "MESH_NORMAL"; 
                    break;
                case 2:
                    this._entity.getComponent(MeshRenderer).material = DefaultMaterials.MESH_LAMBERT;
                    this._msg = "MESH_LAMBERT"; 
                    break;
                case 3:
                    this._entity.getComponent(MeshRenderer).material = DefaultMaterials.MESH_PHONG;
                    this._msg = "MESH_PHONG";
                    break;
                case 4:
                    this._entity.getComponent(MeshRenderer).material = DefaultMaterials.MESH_STANDARD;
                    this._msg = "MESH_STANDARD";
                    break;
                case 5:
                    this._entity.getComponent(MeshRenderer).material = DefaultMaterials.MESH_PHYSICAL;
                    this._msg = "MESH_PHYSICAL";
                    break;
                case 6:
                    this._entity.getComponent(MeshRenderer).material = DefaultMaterials.LINEDASHED;
                    this._msg = "LINEDASHED";
                    break;
                    
                default:
                    break;
            }
            Application.instance.egretProUtil.dispatch("updateText",1,this._msg)      
    }
}