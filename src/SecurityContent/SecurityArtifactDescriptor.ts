/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v2';

/**
 * SecurityArtifactDescriptor
 */
export interface SecurityArtifactDescriptor<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Deployed By.
   * @nullable
   */
  deployedBy?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Deployed On.
   * @nullable
   */
  deployedOn?: DeserializedType<DeSerializersT, 'Edm.DateTime'>;
  /**
   * Status.
   * @nullable
   */
  status?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * SecurityArtifactDescriptorField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class SecurityArtifactDescriptorField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  SecurityArtifactDescriptor,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link SecurityArtifactDescriptor.type} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  type: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Type', 'Edm.String', true);
  /**
   * Representation of the {@link SecurityArtifactDescriptor.deployedBy} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deployedBy: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DeployedBy', 'Edm.String', true);
  /**
   * Representation of the {@link SecurityArtifactDescriptor.deployedOn} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  deployedOn: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.DateTime',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('DeployedOn', 'Edm.DateTime', true);
  /**
   * Representation of the {@link SecurityArtifactDescriptor.status} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Status', 'Edm.String', true);

  /**
   * Creates an instance of SecurityArtifactDescriptorField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(
      fieldName,
      fieldOf,
      deSerializers,
      SecurityArtifactDescriptor,
      fieldOptions
    );
  }
}

export namespace SecurityArtifactDescriptor {
  /**
   * Metadata information on all properties of the `SecurityArtifactDescriptor` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<SecurityArtifactDescriptor>[] =
    [
      {
        originalName: 'Type',
        name: 'type',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DeployedBy',
        name: 'deployedBy',
        type: 'Edm.String',
        isCollection: false
      },
      {
        originalName: 'DeployedOn',
        name: 'deployedOn',
        type: 'Edm.DateTime',
        isCollection: false
      },
      {
        originalName: 'Status',
        name: 'status',
        type: 'Edm.String',
        isCollection: false
      }
    ];
}
