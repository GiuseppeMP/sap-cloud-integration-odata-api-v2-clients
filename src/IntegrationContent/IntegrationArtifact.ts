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
 * IntegrationArtifact
 */
export interface IntegrationArtifact<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Id.
   * @nullable
   */
  id?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  name?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  type?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * IntegrationArtifactField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class IntegrationArtifactField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  IntegrationArtifact,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link IntegrationArtifact.id} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  id: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Id', 'Edm.String', true);
  /**
   * Representation of the {@link IntegrationArtifact.name} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  name: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true);
  /**
   * Representation of the {@link IntegrationArtifact.type} property for query construction.
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
   * Creates an instance of IntegrationArtifactField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, IntegrationArtifact, fieldOptions);
  }
}

export namespace IntegrationArtifact {
  /**
   * Metadata information on all properties of the `IntegrationArtifact` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<IntegrationArtifact>[] = [
    {
      originalName: 'Id',
      name: 'id',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Name',
      name: 'name',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'Type',
      name: 'type',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
