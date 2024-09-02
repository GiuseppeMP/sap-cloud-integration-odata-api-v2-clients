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
 * Value
 */
export interface Value<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * Src Value.
   * @nullable
   */
  srcValue?: DeserializedType<DeSerializersT, 'Edm.String'>;
  /**
   * Tgt Value.
   * @nullable
   */
  tgtValue?: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * ValueField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class ValueField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  Value,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link Value.srcValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  srcValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('SrcValue', 'Edm.String', true);
  /**
   * Representation of the {@link Value.tgtValue} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  tgtValue: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    true,
    false
  > = this._fieldBuilder.buildEdmTypeField('TgtValue', 'Edm.String', true);

  /**
   * Creates an instance of ValueField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, Value, fieldOptions);
  }
}

export namespace Value {
  /**
   * Metadata information on all properties of the `Value` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<Value>[] = [
    {
      originalName: 'SrcValue',
      name: 'srcValue',
      type: 'Edm.String',
      isCollection: false
    },
    {
      originalName: 'TgtValue',
      name: 'tgtValue',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
